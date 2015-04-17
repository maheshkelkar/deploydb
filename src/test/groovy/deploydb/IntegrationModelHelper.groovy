package deploydb

import deploydb.models.Artifact

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
        return (integrationTestAppHelper.patchJsonToPath(path, messageBody)).status == 200
    }

    boolean sendDeploymentCompletedTrigger() {
        println("calling sendDeploymentCompletedTrigger")
        String path = "/api/deployments/1"
        String messageBody = """
      {
        "status" : "COMPLETED"
      }
     """
        return (integrationTestAppHelper.patchJsonToPath(path, messageBody)).status == 200
    }

}