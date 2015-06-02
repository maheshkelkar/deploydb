package deploydb

import deploydb.models.Flow
import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.GenericType
import javax.ws.rs.core.Response


class FlowReadingSpec extends Specification {

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

    boolean verifyGetFlows() {
        Response response = integrationRestApiClient.getFromPath("/api/flows", false)
        List<Flow> flows = response.readEntity(new GenericType<List<Flow>>(){})
        response.close()
        return response.status == 200 && flows.size == 1
    }

    @Ignore
    def "artifact in multi promotion service should return single flow" () {

        given:
        // Create the required config
        mcfgHelper.createMultiPromoMultiEnvServiceModelConfigFiles()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // create the artifact
        integModelHelper.sendCreateArtifact()

        when:
        boolean success = verifyGetFlows()

        then:
        success == true

    }
}