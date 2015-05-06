package deploydb

import spock.lang.*

import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class DeploymentCompletedNotificationsSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integrationRestApiClient)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentcompleted.v1+json"
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    def "no webhook should be called when you receive deployment completed trigger if there is no webhook config" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 0
    }

    def "webhook should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentCompletedWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-completed/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "environment webhook should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentCompletedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-completed/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }

    def "both global and environment webhooks should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentCompletedWebhookConfigFile()
        mcfgHelper.createDeploymentCompletedEnvironmentWebhookConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-completed/build","/job/basicEnv-deploy-completed/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple webhooks should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentCompletedWebhooksConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-completed-1/build", "/job/notify-deployment-completed-2/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "multiple environments webhook should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentCompletedEnvironmentWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-completed-1/build","/job/basicEnv-deploy-completed-2/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2
    }

    def "both multiple global and environment webhooks should be called when you receive deployment completed trigger" () {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createMultipleDeploymentCompletedWebhooksConfigFile()
        mcfgHelper.createMultipleDeploymentCompletedEnvironmentWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/notify-deployment-completed-1/build", "/job/notify-deployment-completed-2/build",
                 "/job/basicEnv-deploy-completed-1/build", "/job/basicEnv-deploy-completed-2/build"]

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 4
    }

}
