package deploydb.dao

import deploydb.IntegrationModelHelper
import deploydb.IntegrationTestAppHelper
import deploydb.WebhooksModelConfigHelper
import org.hibernate.Criteria
import org.hibernate.SessionFactory
import spock.lang.*

class DeploymentDAOSpec extends Specification {
    private DeploymentDAO dao
    private SessionFactory sessionFactory = Mock(SessionFactory)
    IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    IntegrationModelHelper integModelHelper = new  IntegrationModelHelper(integAppHelper)
    private WebhooksModelConfigHelper mcfgHelper = new WebhooksModelConfigHelper()

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.runner.getApplication().configDirectory = mcfgHelper.baseCfgDirName
    }

    def cleanup() {
        integAppHelper.stopApp()
        mcfgHelper.cleanup()
    }

    def "ensure the constructor works"() {
        given:
        DeploymentDAO dao

        when:
        dao = new DeploymentDAO(sessionFactory)

        then:
        dao instanceof DeploymentDAO
    }

    def "getByArtifactId() should return null if there are no deployments"() {
        given:
        DeploymentDAO dao = Spy(DeploymentDAO, constructorArgs: [sessionFactory])
        def criteria = Mock(Criteria)
        criteria./add|set|addOrder|setMaxResults|setFirstResult/(_) >> criteria
        _ * dao.criteria() >> criteria
        1 * criteria.list() >> []

        expect:
        dao.getByArtifactId(1).isEmpty()
    }

    @Ignore
    def "getByEnvironmentIdent() should return null if there are no deployments"() {
        given:
        DeploymentDAO dao = new DeploymentDAO(integAppHelper.runner.getApplication().sessionFactory)

        expect:
        integAppHelper.runner.getApplication().workflow.deploymentDAO
                .getByEnvironmentIdent("basicEnv", 1, 20).isEmpty()
    }

    @Ignore
    def "getByEnvironmentIdent() should returns deployments for the environment ident"() {
        given:
        DeploymentDAO dao = new DeploymentDAO(integAppHelper.runner.getApplication().sessionFactory)

        // Create the required config
        mcfgHelper.createServicePromoitionPipelineModelsConfigFiles()
        mcfgHelper.createDeploymentCompletedWebhookConfigFile()
        mcfgHelper.createEnvironmentNoWebhooksConfigFile()

        // load up the configuration
        integAppHelper.runner.getApplication().loadModelConfiguration()

        // setup the deployment for completed trigger
        integModelHelper.sendCreateArtifact()

        expect:
        integAppHelper.runner.getApplication().workflow.deploymentDAO
                .getByEnvironmentIdent("basicEnv", 1, 20).size() == 1
        integAppHelper.runner.getApplication().workflow.deploymentDAO
                .getByPage(1, 20) ==
        integAppHelper.runner.getApplication().workflow.deploymentDAO
                .getByEnvironmentIdent("basicEnv", 1, 20).size() == 1
        integAppHelper.runner.getApplication().workflow.deploymentDAO
                .getByEnvironmentIdent("integ", 1, 20).isEmpty()
    }
}
