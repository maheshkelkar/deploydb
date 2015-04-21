package deploydb

import groovy.io.FileType
import javax.ws.rs.WebApplicationException
import javax.ws.rs.core.Response
import org.apache.commons.codec.digest.DigestUtils
import org.slf4j.Logger
import org.slf4j.LoggerFactory


/* Define a new exception to break out of loop */
class BreakLoopException extends Exception{}

class WorkFlow {
    private final DeployDBApp deployDBApp
    private registry.ModelRegistry<models.Promotion.Promotion> promotionRegistry
    private registry.ModelRegistry<models.Environment> environmentRegistry
    private registry.ModelRegistry<models.pipeline.Pipeline> pipelineRegistry
    private registry.ModelRegistry<models.Service> serviceRegistry
    private models.Webhook.Webhook globalWebhook
    private ModelLoader<models.Promotion.Promotion> promotionLoader
    private ModelLoader<models.Environment> environmentLoader
    private ModelLoader<models.pipeline.Pipeline> pipelineLoader
    private ModelLoader<models.Service> serviceLoader
    private ModelLoader<models.Webhook.Webhook> webhookLoader
    private dao.ArtifactDAO artifactDAO
    private dao.DeploymentDAO deploymentDAO
    private dao.FlowDAO flowDAO
    private dao.ModelConfigDAO modelConfigDAO
    private static final Logger logger = LoggerFactory.getLogger(WorkFlow.class)
    private static final String defaultIdent = "default"

    WorkFlow(DeployDBApp app) {
        this.deployDBApp = app
    }

    void initializeDao() {
        /**
         * Instantiate DAO objects
         */
        artifactDAO = new dao.ArtifactDAO(this.deployDBApp.getSessionFactory())
        deploymentDAO = new dao.DeploymentDAO(this.deployDBApp.getSessionFactory())
        flowDAO = new dao.FlowDAO(this.deployDBApp.getSessionFactory())
        modelConfigDAO = new dao.ModelConfigDAO(this.deployDBApp.getSessionFactory())
    }

    void initializeRegistry() {

        /**
         * Instantiate registries for in memory storage
         */
        promotionRegistry = new registry.ModelRegistry<models.Promotion.Promotion>()
        environmentRegistry = new registry.ModelRegistry<models.Environment>()
        pipelineRegistry = new registry.ModelRegistry<models.pipeline.Pipeline>()
        serviceRegistry = new registry.ModelRegistry<models.Service>()

        /**
         * Instantiate in memory loaders for yaml parsing
         */
        promotionLoader = new ModelLoader<>(models.Promotion.Promotion.class)
        environmentLoader = new ModelLoader<>(models.Environment.class)
        pipelineLoader = new ModelLoader<>(models.pipeline.Pipeline.class)
        serviceLoader = new ModelLoader<>(models.Service.class)
        webhookLoader = new ModelLoader<>(models.Webhook.Webhook.class)
    }

    /** Helper for config loader */
    private void loadConfigModelsCommon(String modelDirName,
                                        ModelType modelType,
                                        registry.ModelRegistry registry,
                                        ModelLoader loader,
                                        Vector<InputStream> inputStreams,
                                        List<models.ModelConfig> modelConfigList,
                                        Closure c) {
        File modelDirectory = new File(modelDirName)
        if (modelDirectory.exists() && modelDirectory.isDirectory()) {
            logger.info("Loading models from directory: ${modelDirectory.getCanonicalPath()}")

            /**
             * When walking thr the files from the directory:
             * - Skip everything but yaml file.
             * - Sort these files in order to ensure that checksum remains same regardless
             *   the order in which files are read from the directory
             */
            List<String> filenames = []
            modelDirectory.eachFileMatch(FileType.FILES, ~/^.*?\.yml/) { it -> filenames << it.name }
            filenames.sort()
            filenames.each() { String filename ->
                File modelFile = new File(modelDirectory, filename)
                try {
                    /** Read YAML file into model object */
                    def model = loader.load(modelFile)

                    /**
                     * If registry is available, then insert model object into registry. In case
                     * of singular models (webhook), it can be null, assume a "deafult" ident.
                     */
                    String ident = defaultIdent
                    if (registry) {
                        ident = model.ident = loader.getIdent(modelFile.name)
                        registry.put(model.ident, model)
                    }

                    /* Add file stream to table for checksum calculations */
                    FileInputStream fileInputStream = new FileInputStream(modelFile)
                    inputStreams.add(fileInputStream)

                    /* Create ModelConfig */
                    models.ModelConfig modelConfig = new models.ModelConfig(null, modelFile.text,
                            ident, modelType)
                    modelConfigList.add(modelConfig)

                    /** Execute the closure */
                    c.call(model)

                } catch (BreakLoopException e) {
                    throw e
                } catch (IllegalArgumentException e) {
                    throw e /* Throw the exception again */
                } catch (all) {
                    logger.error("Failed to load model from ${modelFile.name}")
                }
            }
        }
    }

    /**
     * Read configuration into each model
     *
     * Throws an exception if dependency between models fails
     *
     * @param baseConfigDirName
     */
    void loadConfigModels() {

        /** Validate base config directory */
        File baseConfigDirectory = new File(this.deployDBApp.configDirectory)
        if (!baseConfigDirectory.exists() || !baseConfigDirectory.isDirectory()) {
            throw new Exception("No DeployDB configuration found. DeployDB would not function properly")
        }

        /* Load config */
        logger.info("Loading models from directory: ${baseConfigDirectory.getCanonicalPath()}")

        /**
         * Instantiate new registries for in memory storage. We will overwrite the
         * older registries in the end
         */
        registry.ModelRegistry<models.Promotion.Promotion> tmpPromotionRegistry =
                new registry.ModelRegistry<models.Promotion.Promotion>()
        registry.ModelRegistry<models.Environment> tmpEnvironmentRegistry =
                new registry.ModelRegistry<models.Environment>()
        registry.ModelRegistry<models.pipeline.Pipeline> tmpPipelineRegistry =
                new registry.ModelRegistry<models.pipeline.Pipeline>()
        registry.ModelRegistry<models.Service> tmpServiceRegistry =
                new registry.ModelRegistry<models.Service>()
        models.Webhook.Webhook tmpWebhook = null
        Vector<InputStream> inputStreams = new Vector<>()
        List<models.ModelConfig> modelConfigList = []

        /* Load promotions */
        String promotionsDirName = this.deployDBApp.configDirectory + "/promotions"
        loadConfigModelsCommon(promotionsDirName, ModelType.PROMOTION,
                tmpPromotionRegistry, this.promotionLoader,
                inputStreams, modelConfigList) { models.Promotion.Promotion promotion ->
            logger.debug("Loaded promotions model: ${promotion.ident}")
        }

        /* Load environments */
        String environmentsDirName = this.deployDBApp.configDirectory + "/environments"
        loadConfigModelsCommon(environmentsDirName, ModelType.ENVIRONMENT,
                tmpEnvironmentRegistry, this.environmentLoader,
                inputStreams, modelConfigList) { models.Environment environment ->
            logger.debug("Loaded environments model: ${environment.ident}")
        }

        /* Load pipelines */
        String pipelinesDirName = this.deployDBApp.configDirectory + "/pipelines"
        loadConfigModelsCommon(pipelinesDirName, ModelType.PIPELINE,
                tmpPipelineRegistry, this.pipelineLoader,
                inputStreams, modelConfigList) { models.pipeline.Pipeline pipeline ->

            /* Validate */
            pipeline.environments.each() {
                String environmentIdent,
                models.pipeline.Environment pipelineEnvironment ->
                    /* Make sure that environments in the Pipeline are configured */
                    if (tmpEnvironmentRegistry.get(environmentIdent) == null) {
                        throw new IllegalArgumentException(
                                "Missing Environment ${environmentIdent} in Pipeline ${pipeline.ident}")
                    }
                    /* Make sure that promotions in the Pipeline are configured */
                    pipelineEnvironment.promotions.each() {
                        String pipePromotionIdent ->
                            if (tmpPromotionRegistry.get(pipePromotionIdent) == null) {
                                throw new IllegalArgumentException(
                                        "Missing Promotion ${pipePromotionIdent} in Pipeline ${pipeline.ident}")
                            }
                    }
            }

            logger.debug("Loaded pipelines model: ${pipeline.ident}")
        }

        /* Load services */
        String servicesDirName = this.deployDBApp.configDirectory + "/services"
        loadConfigModelsCommon(servicesDirName, ModelType.SERVICE,
                tmpServiceRegistry, this.serviceLoader,
                inputStreams, modelConfigList) { models.Service service ->

            /* Validate */
            service.pipelines.each() { String pipelineIdent ->
                /* Make sure that pipelines in the Service are configured */
                if (tmpPipelineRegistry.get(pipelineIdent) == null) {
                    throw new IllegalArgumentException(
                            "Missing pipeline ${pipelineIdent} in Service ${service.ident}")
                }
            }
            service.promotions.each() { String promotionIdent ->
                /* Make sure that promotions in the Service are configured */
                if (tmpPromotionRegistry.get(promotionIdent) == null) {
                    throw new IllegalArgumentException(
                            "Missing promotion ${promotionIdent} in Service ${service.ident}")
                }
            }

            logger.debug("Loaded services model: ${service.ident}")
        }

        /* Load webhook */
        String webhookDirName = this.deployDBApp.configDirectory + "/webhook"
        try {
            loadConfigModelsCommon(webhookDirName, ModelType.WEBHOOK,
                null, this.webhookLoader,
                inputStreams, modelConfigList) { models.Webhook.Webhook webhook ->

                /* Store webhook */
                tmpWebhook = webhook

                logger.debug("Loaded webhook model")

                /* Now that we have found a valid global webhook, we are done */
                throw new BreakLoopException()
            }
        } catch (BreakLoopException e) {
            /* Neeed the log to make codenarc happy */
            logger.debug("Done with webhook load")
        }

        /* Compute a checksum for this iteration of Models configuration */
        SequenceInputStream sequenceInputStream = new SequenceInputStream(inputStreams.elements())
        String newConfigChecksum
        try {
            newConfigChecksum = DigestUtils.md5Hex(sequenceInputStream)
        } finally {
            sequenceInputStream.close()
        }
        if (this.deployDBApp.configChecksum == newConfigChecksum) {
            logger.info("Ignoring as no change in DeployDB Model Configuration detected")
            return
        }
        this.deployDBApp.configChecksum = newConfigChecksum

        /* At least one service MUST be configured for deployDb to function properly */
        if (tmpServiceRegistry.getAll().isEmpty()) {
            logger.info("NO SERVICES ARE CONFIGURED. DeployDB would not function properly")
        }

        /* Persist all ModelConfigs */
        modelConfigList.each() { models.ModelConfig modelConfig ->
            modelConfig.checksum = newConfigChecksum
            this.modelConfigDAO.persist(modelConfig)
        }

        /**
         * Overwrite the model registries with new ones
         */
        promotionRegistry = tmpPromotionRegistry
        environmentRegistry = tmpEnvironmentRegistry
        pipelineRegistry = tmpPipelineRegistry
        serviceRegistry = tmpServiceRegistry
        globalWebhook = tmpWebhook
    }

    /**
     * Retrieve webhook either from memory or DB (if config has changed)
     *
     * @param deployment
     * @return Webhook object
     */
    models.Webhook.Webhook retrieveWebhook(models.Deployment deployment) {

        /**
         * If configuration has changed since the flow creation, then retrieve and
         * rebuild objects from DB
         */
        if (deployment.flow.configChecksum != this.deployDBApp.configChecksum) {
            /* Load webhook from config */
            models.ModelConfig webhookConfig =
                    this.modelConfigDAO.findModelConfig(ModelType.WEBHOOK,
                            defaultIdent, deployment.flow.configChecksum)
            if (webhookConfig) {
                models.Webhook.Webhook fetchedWebhook =
                        this.webhookLoader.loadFromString(webhookConfig.contents)
                return fetchedWebhook
            } else {
                logger.error("Failed to find webhook configuration for " +
                        "deployment: ${deployment.id}, config-checksum: ${deployment.flow.configChecksum}")
                return null
            }
        } else {
            /* Load extant global webhook object */
            return this.globalWebhook
        }
    }

    /**
     * Retrieve Environment either from memory or DB (if config has changed)
     *
     * @param deployment
     * @return Environment
     */
    models.Environment retrieveEnvironment(models.Deployment deployment) {

        /**
         * If configuration is changed since the flow creation, then retrieve and
         * rebuild objects from DB
         */
        if (deployment.flow.configChecksum != this.deployDBApp.configChecksum) {
            /* Load environment from config */
            models.ModelConfig environmentConfig =
                    this.modelConfigDAO.findModelConfig(ModelType.ENVIRONMENT,
                            deployment.environmentIdent, deployment.flow.configChecksum)
            if (environmentConfig) {
                models.Environment environment =
                        this.environmentLoader.loadFromString(environmentConfig.contents)
                return environment
            } else {
                logger.error("Failed to find Environment configuration for " +
                        "deployment: ${deployment.id}, Environment: ${deployment.environmentIdent}, " +
                        "config-checksum: ${deployment.flow.configChecksum}")
                return null
            }
        } else {
            /* Load from environment */
            return this.environmentRegistry.get(deployment.environmentIdent)
        }
    }

    /**
     * Retrieve Promotion either from memory or DB (if config has changed)
     *
     * @param deployment
     * @return Promotion
     */
    models.Promotion.Promotion retrievePromotion(models.Deployment deployment, String promotionIdent) {

        /**
         * If configuration is changed since the flow creation, then retrieve and
         * rebuild objects from DB
         */
        if (deployment.flow.configChecksum != this.deployDBApp.configChecksum) {
            /* Load promotion from config */
            models.ModelConfig promotionConfig =
                    this.modelConfigDAO.findModelConfig(ModelType.PROMOTION,
                            promotionIdent, deployment.flow.configChecksum)
            if (promotionConfig) {
                models.Promotion.Promotion promotion =
                        this.promotionLoader.loadFromString(promotionConfig.contents)
                return promotion
            } else {
                logger.error("Failed to find Promotion configuration for " +
                        "deployment: ${deployment.id}, Promotion: ${promotionIdent}, " +
                        "config-checksum: ${deployment.flow.configChecksum}")
                return null
            }
        } else {
            /* Load from promotion */
            return this.promotionRegistry.get(promotionIdent)
        }
    }

    /**
     * Work flow for artifact created
     *
     * Creates deployments and flows for the given artifact, based on the
     * information provided in the configured models
     *
     * @param artifact
     */
    void triggerArtifactCreated(models.Artifact artifact) {

        /* if artifacts already exists, send 409 back  */
        if (artifactDAO.artifactExists(artifact.group, artifact.name, artifact.version)) {
            throw new WebApplicationException(Response.Status.CONFLICT)
        }

        /* Lookup Service(s) */
        List<models.Service> services = this.serviceRegistry.getAll().findAll() { models.Service service ->
            service.artifacts.find() { String artifactIdent ->
                artifactIdent == (artifact.group + ":" + artifact.name)
            }
        }
        if (services.flatten().isEmpty() || services.flatten().contains(null)) {
            String artifactIdent =
            logger.info("Failed to find Service for Artifact: " +
                         artifact.group + ":" + artifact.name +
                        ", aborting artifact deployment")
            throw new WebApplicationException(Response.Status.NOT_FOUND)
        }

        /* For each service, create a separate flow and the following */
        services.flatten().each() { models.Service service ->

            /* Create a flow */
            models.Flow flow = new models.Flow(artifact, service.ident,
                    this.deployDBApp.configChecksum)

            /* Get all pipelines */
            List<models.pipeline.Pipeline> pipelines = service.getPipelines().collect() { String pipelineIdent ->
                this.pipelineRegistry.get(pipelineIdent)
            }
            if (pipelines.isEmpty() || pipelines.contains(null)) {
                throw new WebApplicationException(Response.Status.NOT_FOUND)
            }

            /* Get all environments */
            List<deploydb.models.Environment> environments = []
            List<models.pipeline.Pipeline> pipelinePromotions = []
            pipelines.each() {
                models.pipeline.Pipeline pipeline ->
                    pipeline.environments.each() {
                        String environmentIdent,
                        models.pipeline.Environment pipelineEnvironment ->
                            environments.add(this.environmentRegistry.get(environmentIdent))
                            pipelinePromotions = pipelineEnvironment.promotions.collect() {
                                String pipePromotionIdent ->
                                    this.promotionRegistry.get(pipePromotionIdent)
                            }
                    }
            }
            if (environments.flatten().isEmpty() || environments.flatten().contains(null)) {
                throw new WebApplicationException(Response.Status.NOT_FOUND)
            }

            /* For all environments in pipeline, create deployments */
            environments.each() { models.Environment environment ->

                /* Create deployment */
                models.Deployment deployment = new models.Deployment(artifact,
                        environment.ident, service.ident, Status.NOT_STARTED)
                if (deployment == null) {
                    throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR)
                }
                if (!flow.addDeployment(deployment)) {
                    throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR)
                }

                /* Get all promotions in service & pipelines */
                List<models.Promotion.Promotion> promotions = service.getPromotions().collect() { String promotionIdent ->
                    this.promotionRegistry.get(promotionIdent)
                }
                promotions.addAll(pipelinePromotions)
                if (promotions.isEmpty() || promotions.contains(null)) {
                    throw new WebApplicationException(Response.Status.NOT_FOUND)
                }

                /* Create promotion result and add to deployment. Using unique() to ignore duplicates */
                promotions.unique().each() { promotion ->
                    models.PromotionResult promotionResult =
                            new models.PromotionResult(promotion.ident, Status.NOT_STARTED, null)
                    if (promotionResult == null) {
                        throw new WebApplicationException(Response.Status.NOT_FOUND)
                    }
                    if (!deployment.addPromotionResult(promotionResult)) {
                        throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR)
                    }
                }
            }

            /* Persist the artifact and flow/deployment/promotionResult, with one whammy */
            this.artifactDAO.persist(artifact)
            this.flowDAO.persist(flow)

            /* Get deployment from the flow and start it */
            triggerDeploymentCreated(flow)
        }
    }

    /**
     * Work flow for deployment created
     *
     * This is an internal trigger fired when deployment is verified (success/failed)
     * OR when artifact is created
     *
     * @param flow
     */
    void triggerDeploymentCreated(models.Flow flow) {

        /* Ignore if flow is marked for failed */
        if (flow.status == Status.FAILED) {
            return
        }

        /* Make Sure no deployment in progress */
        models.Deployment deployment = flow.getDeployments().find() { d ->
            d.status == Status.STARTED ||
                    d.status == Status.CREATED ||
                    d.status == Status.COMPLETED
        }
        if (deployment != null) {
            throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR)
        }

        /* Get deployment from the flow and start it */
        deployment = flow.getDeployments().find() {
            d -> d.status == Status.NOT_STARTED
        }
        if (deployment == null) {
            /* No more deployments to deployment. All Done. Update flow status */
            if (flow.status != Status.FAILED) {
                flow.status = Status.SUCCESS
            }
            return
        }

        /* Mark Deployment as ready for deploying */
        deployment.status = Status.CREATED

        /*
         * Create the webhook mapper for deployment
         */
        mappers.DeploymentWebhookMapper deploymentWebhookMapper =
                new mappers.DeploymentWebhookMapper(deployment)

        /*
         * Get the global and environment based webhooks for this deployment
         */
        models.Webhook.Webhook webhook = retrieveWebhook(deployment)
        models.Environment environment = retrieveEnvironment(deployment)
        models.Webhook.Webhook environmentWebhook =
                environment ? environment.webhook : null

        /*
         * Use webhook manager to send the webhook
         */
        if (deployDBApp.webhooksManager.sendDeploymentWebhook("created", webhook,
                environmentWebhook, deploymentWebhookMapper) == false) {
            logger.info("Failed to send deployment started ${deployment.id}")
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }

    }

    /**
     * Work flow for deployment started
     *
     * Updates the deployment status to note a forward progress
     *
     * @param deployment
     */
    void triggerDeploymentStarted(models.Deployment deployment) {

        /* Update deployment status */
        deployment.status = Status.STARTED

        /*
         * Create the webhook mapper for deployment
         */
        mappers.DeploymentWebhookMapper deploymentWebhookMapper =
                new mappers.DeploymentWebhookMapper(deployment)

        /*
         * Get the global and environment based webhooks for this deployment
         */
        models.Webhook.Webhook webhook = retrieveWebhook(deployment)
        models.Environment environment = retrieveEnvironment(deployment)
        models.Webhook.Webhook environmentWebhook =
                environment ? environment.webhook : null

        /*
         * Use webhook manager to send the webhook
         */
        if (deployDBApp.webhooksManager.sendDeploymentWebhook("started", webhook,
                environmentWebhook, deploymentWebhookMapper) == false) {
            logger.info("Failed to send deployment started ${deployment.id}")
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }

    }

    /**
     * Work flow for deployment completed
     *
     * Updates the deployment status to note a forward progress
     *
     * @param deployment
     */
    void triggerDeploymentCompleted(models.Deployment deployment) {

        /* Update deployment status */
        deployment.status = Status.COMPLETED

        /* Update promotion results status */
        deployment.getPromotionResultSet().collect() { pr -> pr.status = Status.STARTED }

        /*
         * Create the webhook mapper for deployment
         */
        mappers.DeploymentWebhookMapper deploymentWebhookMapper =
                new mappers.DeploymentWebhookMapper(deployment)

        /*
         * Get the global and environment based webhooks for this deployment
         */
        models.Webhook.Webhook webhook = retrieveWebhook(deployment)
        models.Environment environment = retrieveEnvironment(deployment)
        models.Webhook.Webhook environmentWebhook =
                environment ? environment.webhook : null

        /*
         * Use webhook manager to send the webhook
         */
        if (deployDBApp.webhooksManager.sendDeploymentWebhook("completed", webhook,
                environmentWebhook, deploymentWebhookMapper) == false) {
            logger.info("Failed to send deployment completed ${deployment.id}")
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }
    }

    /**
     * Work flow for deployment failed
     *
     * Mark the deployment and flow with failure
     *
     * @param deployment
     */
    void triggerDeploymentFailed(models.Deployment deployment) {

        /* Update deployment status */
        deployment.status = Status.FAILED

        /* Update flow status */
        deployment.getFlow().status = Status.FAILED

        /* FIXME - Invoke deployment failed webhooks */
    }

    /**
     * Work flow for promotion success
     *
     * Add promotion results to deployment. Updates deployment/flow when last
     * promotion has succeeded
     *
     * @param deployment
     */
    void triggerPromotionSuccess(models.Deployment deployment,
                                 models.PromotionResult promotionResult) {

        /*
         * Create the webhook mapper for deployment
        */
        mappers.PromotionWebhookMapper promotionWebhookMapper =
                new mappers.PromotionWebhookMapper(deployment, promotionResult)

        /*
         * Get the global and environment based webhooks for this deployment
         */
        models.Webhook.Webhook webhook = retrieveWebhook(deployment)
        models.Environment environment = retrieveEnvironment(deployment)
        models.Webhook.Webhook environmentWebhook =
                environment ? environment.webhook : null

        /*
         * Use webhook manager to send the webhook
         */
        if (deployDBApp.webhooksManager.sendPromotionWebhook("completed", webhook,
                environmentWebhook, promotionWebhookMapper) == false) {
            logger.info("Failed to send promotion success webhook for ${promotionResult.promotion}")
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }


        /* Find out if any other promotions are waiting for results */
        models.PromotionResult startedPromotionResult = deployment.getPromotionResultSet().find() {
            pr -> pr.promotionIdent == Status.STARTED
        }
        if (startedPromotionResult != null) {
            /* Wait for more promotion results */
            return
        }

        /* Update deployment status */
        if (deployment.status != Status.FAILED) {
            deployment.status = Status.SUCCESS
            /* FIXME - Invoke deployment verified webhooks */
        }

        /* Trigger NEXT deployment created for next one */
        triggerDeploymentCreated(deployment.getFlow())

    }

    /**
     * Work flow for promotion failed
     *
     * Update the deployment and flow with failed status
     *
     * @param deployment
     */
    void triggerPromotionFailed(models.Deployment deployment, models.PromotionResult promotionResult) {

        /*
         * Create the webhook mapper for deployment
        */
        mappers.PromotionWebhookMapper promotionWebhookMapper =
                new mappers.PromotionWebhookMapper(deployment, promotionResult)

        /*
         * Get the global and environment based webhooks for this deployment
         */
        models.Webhook.Webhook webhook = retrieveWebhook(deployment)
        models.Environment environment = retrieveEnvironment(deployment)
        models.Webhook.Webhook environmentWebhook =
                environment ? environment.webhook : null

        /*
         * Use webhook manager to send the webhook
         */
        if (deployDBApp.webhooksManager.sendPromotionWebhook("completed", webhook,
                environmentWebhook, promotionWebhookMapper) == false) {
            logger.info("Failed to send promotion failed webhook for ${promotionResult.promotion}")
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }

        /* Update deployment status */
        deployment.status = Status.FAILED

        /* Update flow status */
        deployment.getFlow().status = Status.FAILED

        /* FIXME - Invoke deployment verified(failed) webhooks */
    }
}