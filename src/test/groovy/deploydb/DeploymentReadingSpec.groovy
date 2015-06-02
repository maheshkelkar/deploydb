package deploydb

import deploydb.models.Deployment
import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.GenericType
import javax.ws.rs.core.Response


class DeploymentReadingSpec extends Specification {

    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new IntegrationModelHelper(integrationRestApiClient)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName
    }

    def cleanup() {
        integAppHelper.stopApp()
        mcfgHelper.cleanup()
    }

    boolean verifyGetDeployments() {
        Response response = integrationRestApiClient.getFromPath("/api/deployments", false)
        List<Deployment> deployments = response.readEntity(new GenericType<List<Deployment>>(){})
        response.close()
        return response.status == 200 && deployments.size == 1
    }

    @Ignore
    def "artifact in multi promotion service should return single deployment" () {

        given:
        // Create the required config
        mcfgHelper.createMultiPromoServiceModelConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // create the artifact
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = verifyGetDeployments()

        then:
        success == true

    }

}
