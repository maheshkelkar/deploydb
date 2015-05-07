package dropwizardintegtest

import javax.ws.rs.core.Response

/**
 * This class is used by the spock integration test suites and UAT tests. This will be used by
 * clients of deploydb to verify the contract of deploydb interface
 */
class IntegrationModelHelper {

    private IntegrationRestApiClient integrationRestApiClient = null
    IntegrationModelHelper(IntegrationRestApiClient integTestAppHelper) {
        integrationRestApiClient = integTestAppHelper
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
        response.close()

        return response.status == 201

    }

    boolean sendGetApi(String path) {
        Response response = integrationRestApiClient.getFromPath(path, false)
        response.close()
        return response.status == 200
    }

    boolean sendDeploymentStartedTrigger(long deploymentId) {
        String path = "/api/deployments/" + String.valueOf(deploymentId)
        String messageBody = """
      {
        "status" : "STARTED"
      }
     """
        Response response = integrationRestApiClient.patchJsonToPath(path, messageBody)
        response.close()
        return response.status == 200
    }

    boolean sendDeploymentCompletedTrigger(long deploymentId) {
        String path = "/api/deployments/" + String.valueOf(deploymentId)
        String messageBody = """
      {
        "status" : "COMPLETED"
      }
     """
        Response response = integrationRestApiClient.patchJsonToPath(path, messageBody)
        response.close()
        return response.status == 200
    }

    boolean sendPromotionCompletedTrigger(long deploymentId) {
        String path = "/api/deployments/" + String.valueOf(deploymentId) + "/promotions"
        String messageBody = """
      {
        "name"  : "basicPromo",
        "status" : "SUCCESS",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results"
      }
     """
        Response response = integrationRestApiClient.postJsonToPath(path, messageBody, false)
        response.close()
        return response.status == 201

    }
}