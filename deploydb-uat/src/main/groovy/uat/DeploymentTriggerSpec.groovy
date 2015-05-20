package uat

import spock.lang.*
import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.GenericType
import javax.ws.rs.core.Response

class DeploymentTriggerSpec extends Specification {

    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new IntegrationModelHelper(integrationRestApiClient)
    static List<UatDeployment> uatDeployments

    def setup() {
        integrationRestApiClient.host = "http://" + System.getProperty("DeploydbHost")
        integrationRestApiClient.port = Integer.valueOf(System.getProperty("DeploydbPort"))
    }

    boolean sendGetDeployments() {
        /**
         * We can't hard code the id to fetch the deployment because in some environments there
         * will be more artifacts than test artifacts created by UAT
         * Let's use the artifact id of that was created as part of ArtifactTriggerSpec and use
         * that to fectch the deployment.
         */
        String path = "/api/deployments/by-artifact/" + System.getProperty("artifactId")

        Response response = integrationRestApiClient.getFromPath(path, false)

        uatDeployments = response.readEntity(new GenericType<List<UatDeployment>>(){})

        response.close()
        return response.status == 200

    }

    def "read deployments should return success"() {
        when:
        boolean success = sendGetDeployments()

        then:
        success == true
    }

    def "update the deployments to started should return success"() {
        when:
        boolean success = integModelHelper.sendDeploymentStartedTrigger(uatDeployments[0].id)

        then:
        success == true
    }

    def "update the deployments to completed should return success"() {
        when:
        boolean success = integModelHelper.sendDeploymentCompletedTrigger(uatDeployments[0].id)

        then:
        success == true
    }

    def "update the deployments promotion completed should return success"() {
        when:
        boolean success = integModelHelper.sendPromotionCompletedTrigger(uatDeployments[0].id)

        then:
        success == true
    }

}