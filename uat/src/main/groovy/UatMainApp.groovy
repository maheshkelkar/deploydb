package uat

import org.codehaus.groovy.testng.TestNgRunner


class UatMainApp {

    static void main(String[] args) {
        uat.TestRunner testRunner = new uat.TestRunner()
        ConsulClient consulClient = new ConsulClient()

        consulClient.getDeploydbHosts()
        boolean success = testRunner.runTests()

        success ? System.exit(0):System.exit(1)
    }
}