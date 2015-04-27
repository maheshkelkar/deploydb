package dropwizardintegtest

import javax.ws.rs.core.Response

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
        return (integrationRestApiClient.postJsonToPath(path, messageBody, false)).status == 201

    }

    boolean sendDeploymentStartedTrigger() {
        String path = "/api/deployments/1"
        String messageBody = """
      {
        "status" : "STARTED"
      }
     """
        Response response = integrationRestApiClient.patchJsonToPath(path, messageBody)
        response.close()
        return response.status == 200
    }

    boolean sendDeploymentCompletedTrigger() {
        String path = "/api/deployments/1"
        String messageBody = """
      {
        "status" : "COMPLETED"
      }
     """
        Response response = integrationRestApiClient.patchJsonToPath(path, messageBody)
        response.close()
        return response.status == 200
    }

    boolean sendPromotionCompletedTrigger() {
        String path = "/api/deployments/1/promotions"
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