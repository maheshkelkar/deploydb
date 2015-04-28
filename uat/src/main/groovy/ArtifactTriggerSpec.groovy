package uat

import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class ArtifactTriggerSpec {

    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new IntegrationModelHelper(integrationRestApiClient)

    void setup() {
        integrationRestApiClient.host = "http://10.32.10.63"
    }

    void createArtifactShouldReturnSuccess() {
        setup()
        boolean success = integModelHelper.sendCreateArtifact()
        println("success: ${success}")
    }
}