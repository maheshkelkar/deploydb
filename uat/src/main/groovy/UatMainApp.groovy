package uat

import org.codehaus.groovy.testng.TestNgRunner


class UatMainApp {

    static void main(String[] args) {
        uat.TestRunner testRunner = new uat.TestRunner()
        ConsulClient consulClient = new ConsulClient()

        boolean success = true
        consulClient.getDeploydbHosts().each { key, value ->
            System.setProperty("DeploydbHost", key)
            System.setProperty("DeploydbPort", String.valueOf(value))

            /*
             * Delete the test artifact, deployments and promotion results if they already present.
             * This will allow the UAT tests to rerun for long lived environment
             */
            if(false == testRunner.cleanupModels("basic.group.1", "bg1","1.2.345")) {
                System.exit(1)
            }
            success &= testRunner.runTests()
        }

        success ? System.exit(0):System.exit(1)
    }
}
