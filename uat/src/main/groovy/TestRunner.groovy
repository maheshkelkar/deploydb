package uat

import spock.util.EmbeddedSpecRunner

class TestRunner {
    private EmbeddedSpecRunner embeddedSpecRunner = new EmbeddedSpecRunner()
    private List listOfClasses = new ArrayList()

    TestRunner() {
        /**
         *  list of specs to run the tests. I wish there is a better way to
         *  add classes to run the tests using class loader but given this
         *  is running in stand alone jar, its not possible
         */
        listOfClasses = [ArtifactTriggerSpec, DeploymentTriggerSpec]
    }

    boolean runTests() {
        listOfClasses.each {
            embeddedSpecRunner.runClass(it)
        }
    }
}
