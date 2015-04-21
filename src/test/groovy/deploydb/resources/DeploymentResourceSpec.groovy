package deploydb.resources

import com.google.common.base.Optional
import deploydb.DeployDBApp
import deploydb.Status
import deploydb.WorkFlow
import deploydb.auth.User
import deploydb.models.Artifact
import io.dropwizard.testing.junit.ResourceTestRule
import javax.ws.rs.client.Client
import org.junit.Rule
import spock.lang.*
import deploydb.models.Deployment
import deploydb.dao.DeploymentDAO
import io.dropwizard.auth.Auth
import io.dropwizard.auth.AuthFactory
import io.dropwizard.auth.Authenticator
import io.dropwizard.auth.basic.BasicAuthFactory
import io.dropwizard.auth.basic.BasicCredentials

class DeploymentResourceSpec extends Specification {
    def app = new DeployDBApp()
    private WorkFlow workFlow = new WorkFlow(app)
    private DeploymentDAO dao = Mock(DeploymentDAO)

    class SimpleAuthenticator implements Authenticator<BasicCredentials, User> {
        @Override
        public Optional<User> authenticate(BasicCredentials credentials) {
            return Optional.of(new User(credentials.getUsername()))
        }
    }
    private SimpleAuthenticator simpleAuthenticator = new SimpleAuthenticator()

    @Rule
    ResourceTestRule dropwizard = ResourceTestRule.builder()
            .addResource(new DeploymentResource(workFlow))
            .addProvider(AuthFactory.binder(new BasicAuthFactory<User>(simpleAuthenticator,
               "Please enter the user credentials",
                User.class)))
            .build()

    def "ensure it can be instantiated"() {
        when:
        def deploymentResource = new DeploymentResource(workFlow)

        then:
        deploymentResource instanceof DeploymentResource
    }

    def "byIdentifier when the item exists"() {
        given:
        Client client = dropwizard.client()
        workFlow.deploymentDAO = dao
        Long deploymentId = 12
        Artifact a1 = new Artifact()
        Deployment deployment = new Deployment(a1,
                "pre-prod",
                "faas",
                Status.STARTED)

        Deployment fetched = null
        1 * dao.get(deploymentId) >> deployment

        when:
        fetched = client.target(dropwizard.jerseyTest.baseUri)
                        .path("/api/deployments/${deploymentId}")
                        .request()
                        .get(Deployment.class)

        then:
        fetched == deployment
    }
}
