package deploydb

import spock.lang.*

import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class PromotionCompletedNotificationsSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integrationRestApiClient)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()
    private long deploymentId = 1L

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
        // load up the configuration
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName

        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.promotioncompleted.v1+json"
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    def setupDeploymentForPromotionTrigger(){


        integModelHelper.sendCreateArtifact()
        integModelHelper.sendDeploymentStartedTrigger(deploymentId)
        integModelHelper.sendDeploymentCompletedTrigger(deploymentId)
    }

    def "no webhook should be called when you receive promotion completed trigger if there is no webhook config" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // setup the deployment for promotion trigger
        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 0
    }

    def "webhook should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createPromotionCompletedWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-promotion-completed/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "environment webhook should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createPromotionCompletedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-promotion-completed/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "both global and environment webhooks should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createPromotionCompletedWebhookConfigFile()
        mcfgHelper.createPromotionCompletedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-promotion-completed/build","/job/basicEnv-promotion-completed/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple webhooks should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultiplePromotionCompletedWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-promotion-completed-1/build", "/job/notify-promotion-completed-2/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple environment webhooks should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultiplePromotionCompletedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-promotion-completed-1/build", "/job/basicEnv-promotion-completed-2/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "both multiple global and environment webhooks should be called when you receive promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromotionPipelineModelsConfigFiles()
        mcfgHelper.createMultiplePromotionCompletedEnvironmentWebhookConfigFile()
        mcfgHelper.createMultiplePromotionCompletedWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-promotion-completed-1/build", "/job/notify-promotion-completed-2/build",
                        "/job/basicEnv-promotion-completed-1/build", "/job/basicEnv-promotion-completed-2/build"]

        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 4
    }

    def "With multiple promotions, deployment status is not updated with first promotion completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createPromotionConfigFile()
        mcfgHelper.createManualPromotionConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()
        mcfgHelper.createPipelineConfigFile()
        mcfgHelper.createMultiPromoServiceConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // Setup deployment for promotion trigger
        setupDeploymentForPromotionTrigger()

        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(deploymentId)
        models.Deployment deployment
        integAppHelper.withSession {
            deployment = integAppHelper.runner.getApplication().workFlow.deploymentDAO
                    .get(deploymentId)
        }

        then:
        success == true
        sleep(1000)
        deployment.promotionResultSet.size() == 2
        deployment.status == Status.COMPLETED
        models.PromotionResult manualPromoResult = deployment.promotionResultSet.find() {
            pr -> pr.promotionIdent == "manualPromo"
        }
        manualPromoResult.status == Status.STARTED
        models.PromotionResult basicPromoResult = deployment.promotionResultSet.find() {
            pr -> pr.promotionIdent == "basicPromo"
        }
        basicPromoResult.status == Status.SUCCESS
    }
}
