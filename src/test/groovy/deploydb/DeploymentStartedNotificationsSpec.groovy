package deploydb

import spock.lang.*

class DeploymentStartedNotificationsSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integAppHelper)
    private ModelConfigHelper mcfgHelper = new ModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    def "no webhook should be called when you receive deployment started trigger if there is no webhook config" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 0
    }

    def "webhook should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentStartedWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-started/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "environment webhook should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentStartedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-started/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "both global and environment webhooks should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentStartedWebhookConfigFile()
        mcfgHelper.createDeploymentStartedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-started/build","/job/basicEnv-deploy-started/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple webhooks should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentStartedWebhooksConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-started-1/build", "/job/notify-deployment-started-2/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple environments webhook should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentStartedEnvironmentWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-started-1/build","/job/basicEnv-deploy-started-2/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "both multiple global and environment webhooks should be called when you receive deployment started trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentStartedWebhooksConfigFile()
        mcfgHelper.createMultipleDeploymentStartedEnvironmentWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-started-1/build", "/job/notify-deployment-started-2/build",
                 "/job/basicEnv-deploy-started-1/build", "/job/basicEnv-deploy-started-2/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentstarted.v1+json"

        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 4
    }

}
