package uat

import spock.util.EmbeddedSpecRunner
import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.Response

class TestRunner {
    private EmbeddedSpecRunner embeddedSpecRunner = new EmbeddedSpecRunner()
    private List listOfClasses = new ArrayList()

    TestRunner() {
        /**
         *  list of specs to run the tests. I wish there is a better way to
         *  add classes to run the tests using class loader but given this
         *  is running in stand alone jar, its not possible
         */
        listOfClasses = [ArtifactTriggerSpec, DeploymentTriggerSpec]
    }

    boolean runTests() {
        listOfClasses.each {
            embeddedSpecRunner.runClass(it)
        }
    }

    boolean cleanupModels(String artifactGroup, String artifactName, String artifactVersion) {
        IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
        integrationRestApiClient.host = "http://" + System.getProperty("DeploydbHost")

        // admin port in one more than the application by convention
        integrationRestApiClient.port = Integer.valueOf(System.getProperty("DeploydbPort")) + 1

        String path = "/tasks/modelCleanup?group="+artifactGroup+"&name="+artifactName+"&version="+artifactVersion
        Response response = integrationRestApiClient.postJsonToPath(path, "", false)
        response.close()

        return response.status == 200
    }
}
