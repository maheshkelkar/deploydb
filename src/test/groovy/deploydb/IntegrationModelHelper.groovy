package deploydb

import deploydb.models.Artifact

class IntegrationModelHelper {

    private IntegrationTestAppHelper integrationTestAppHelper = null
    IntegrationModelHelper(IntegrationTestAppHelper integTestAppHelper) {
        integrationTestAppHelper = integTestAppHelper
    }
    boolean sendCreateArtifact() {
        String messageBody = """
      {
        "group" : "basic.group.1",
        "name" : "bg1",
        "version" : "1.2.345",
        "sourceUrl" : "http://example.com/cucumber.jar"
      }
    """
        String path = "/api/artifacts"
        return (integrationTestAppHelper.postJsonToPath(path, messageBody, false)).status == 201

    }
}