package deploydb

import spock.lang.*

class WebhookNotificationsSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integAppHelper)
    private ModelConfigHelper mcfgHelper = new ModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        mcfgHelper.createModelsConfigFiles()
        integAppHelper.startAppWithConfiguration('deploydb.h2.cucumber.yml')
        integAppHelper.startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
    }

    def cleanup() {
        integAppHelper.stopApp()
        integAppHelper.stopWebhookTestServerApp()
        mcfgHelper.cleanup()
    }

    def "webhook should be called when you create an artifact" () {

        given:
//        println("config directory ${mcfgHelper.baseCfgDirName}")
//        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName

        when:
//        integAppHelper.runner.getApplication().workFlow.loadConfigModels()
        integAppHelper.webhookRunner.requestWebhookObject.configuredUriPaths = ["/job/notify-deployment-created/build"]
        integAppHelper.webhookRunner.requestWebhookObject.contentTypeParam = "application/vnd.deploydb.deploymentcreated.v1+json"
        boolean success = integModelHelper.sendCreateArtifact()

        then:
        success == true
        integAppHelper.webhookRunner.requestWebhookObject.requestMessageBodies.size() == 1
    }
}
