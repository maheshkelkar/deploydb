package deploydb

import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.Response

class ArtifactTriggerSpec extends Specification {

    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new IntegrationModelHelper(integrationRestApiClient)

    def setup() {
        integrationRestApiClient.host = "http://" + System.getProperty("DeploydbHost")
        integrationRestApiClient.port = Integer.valueOf(System.getProperty("DeploydbPort"))
    }

     boolean sendCreateArtifact() {
        String path = "/api/artifacts"
        String messageBody = """
      {
        "group" : "basic.group.1",
        "name" : "bg1",
        "version" : "1.2.345",
        "sourceUrl" : "http://example.com/cucumber.jar"
      }
    """
        Response response = integrationRestApiClient.postJsonToPath(path, messageBody, false)
        UatArtifact uatArtifact = response.readEntity(UatArtifact)
        System.setProperty("artifactId", String.valueOf(uatArtifact.id))
        response.close()

        return response.status == 201

    }

    def "create artifact should return success"() {

        when:
        boolean success = sendCreateArtifact()

        then:
        success == true
    }

    def "read artifact should return success"() {
        when:
        String path = "/api/artifacts/" + System.getProperty("artifactId")
        boolean success = integModelHelper.sendGetApi(path)

        then:
        success == true
    }
}
