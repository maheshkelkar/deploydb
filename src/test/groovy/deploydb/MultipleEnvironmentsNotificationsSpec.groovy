package deploydb

import spock.lang.*

import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class MultipleEnvironmentsNotificationsSpec extends Specification {

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
                "application/vnd.deploydb.deploymentcreated.v1+json"
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    /**
     *  This integration tests end-to-end scenario when multiple environment are configured in
     *  pipeline. In this scenario multiple deployments are created and once a given deployment
     *  is verified with promotion result, then we transition to next deployment.
     *
     */
    def "multiple notifications should be called when configured with multiple environment pipeline" () {

        given:
        // Create the required config
        mcfgHelper.createBasicProdServicePromoitionPipelineModelsConfigFiles()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        /* set the webhookTestServer's requestWebhookObject. This data will be compare once deploydb
         * sends the webhook to the webhookTestServer
         */
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-created/build"]

        when:
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1

        when:

        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentcompleted.v1+json"

        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-created/build", "/job/basicEnv-deploy-completed/build"]

        success = integModelHelper.sendDeploymentCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 2

        when:
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam =
                "application/vnd.deploydb.deploymentcreated.v1+json"

        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths =
                ["/job/basicEnv-deploy-created/build", "/job/basicEnv-deploy-completed/build",
                "/job/prodEnv-deploy-created/build"]

        success = integModelHelper.sendPromotionCompletedTrigger(1L)

        then:
        success == true
        sleep(1000)
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 3
    }

}