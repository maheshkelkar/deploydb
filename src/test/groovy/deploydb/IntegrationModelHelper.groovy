package deploydb

import javax.ws.rs.core.Response

class IntegrationModelHelper {

    private IntegrationTestAppHelper integrationTestAppHelper = null
    IntegrationModelHelper(IntegrationTestAppHelper integTestAppHelper) {
        integrationTestAppHelper = integTestAppHelper
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
        return (integrationTestAppHelper.postJsonToPath(path, messageBody, false)).status == 201

    }

    boolean sendDeploymentStartedTrigger() {
        String path = "/api/deployments/1"
        String messageBody = """
      {
        "status" : "STARTED"
      }
     """
        Response response = integrationTestAppHelper.patchJsonToPath(path, messageBody)
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
        Response response = integrationTestAppHelper.patchJsonToPath(path, messageBody)
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
        Response response = integrationTestAppHelper.postJsonToPath(path, messageBody, false)
        response.close()
        return response.status == 201

    }
}