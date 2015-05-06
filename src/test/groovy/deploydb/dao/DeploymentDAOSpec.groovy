package deploydb.dao

import dropwizardintegtest.IntegrationModelHelper
import dropwizardintegtest.IntegrationRestApiClient
import deploydb.IntegrationTestAppHelper
import deploydb.WebhooksModelConfigHelper
import deploydb.models.Deployment
import org.hibernate.Criteria
import org.hibernate.SessionFactory
import spock.lang.*

class DeploymentDAOSpec extends Specification {
    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationRestApiClient integrationRestApiClient = new IntegrationRestApiClient()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integrationRestApiClient)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName
    }

    def cleanup() {
        integAppHelper.stopApp()
        mcfgHelper.cleanup()
    }

    def "ensure the constructor works"() {
        when:
        DeploymentDAO dao = new DeploymentDAO(integAppHelper.sessionFactory)

        then:
        dao instanceof DeploymentDAO
    }

    def "getByArtifactId() should return null if there are no deployments"() {
        given:
        SessionFactory sessionFactory = Mock(SessionFactory)
        DeploymentDAO dao = Spy(DeploymentDAO, constructorArgs: [sessionFactory])
        def criteria = Mock(Criteria)
        criteria./add|set|addOrder|setMaxResults|setFirstResult/(_) >> criteria
        _ * dao.criteria() >> criteria
        1 * criteria.list() >> []

        expect:
        dao.getByArtifactId(1).isEmpty()
    }

    def "getByEnvironmentIdent() should return empty list if there are no deployments"() {
        when:
        List<Deployment> deploymentsByEnv
        integAppHelper.withSession {
            deploymentsByEnv = integAppHelper.runner.getApplication().workFlow.deploymentDAO
                    .getByEnvironmentIdent("basicEnv", 0, 20)
        }

        then:
        deploymentsByEnv.isEmpty() == true
    }

    def "getByEnvironmentIdent() should returns deployments for the environment ident"() {
        given:
        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        when:
        List<Deployment> deploymentsByEnv
        List<Deployment> allDeployments
        integAppHelper.withSession {
            deploymentsByEnv = integAppHelper.runner.getApplication().workFlow.deploymentDAO
                    .getByEnvironmentIdent("basicEnv", 0, 20)
            allDeployments = integAppHelper.runner.getApplication().workFlow.deploymentDAO
                    .getByPage(0, 20)
        }

        then:
        deploymentsByEnv.size() == 1
        deploymentsByEnv == allDeployments
    }
}
