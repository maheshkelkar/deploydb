package uat

import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

class DeploymentTriggerSpec extends Specification {

    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new IntegrationModelHelper(integrationRestApiClient)

    def setup() {
        //integrationRestApiClient.host = "http://10.32.10.63"
        integrationRestApiClient.host = "http://localhost"
    }

    def "read artifact should return success"() {
        when:
        boolean success = integModelHelper.sendGetApi("/api/deployments/1")

        then:
        success == true
    }
}