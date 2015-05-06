package deploydb

import org.codehaus.groovy.testng.TestNgRunner


class UatMainApp {

    static void main(String[] args) {
        deploydb.TestRunner testRunner = new deploydb.TestRunner()
        ConsulClient consulClient = new ConsulClient()

        boolean success = true
        consulClient.getDeploydbHosts().each { key, value ->
            System.setProperty("DeploydbHost", key)
            System.setProperty("DeploydbPort", String.valueOf(value))
            if(false == testRunner.cleanupModels()) {
                System.exit(1)
            }
            success &= testRunner.runTests()
        }

        success ? System.exit(0):System.exit(1)
    }
}
