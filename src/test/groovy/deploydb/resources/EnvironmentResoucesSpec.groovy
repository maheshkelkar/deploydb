package deploydb.resources

import deploydb.DeployDBApp
import deploydb.WorkFlow
import deploydb.models.Environment
import deploydb.registry.ModelRegistry
import io.dropwizard.testing.junit.ResourceTestRule
import javax.ws.rs.client.Client
import spock.lang.*
import org.junit.Rule


class EnvironmentResourceSpec extends Specification {
    private DeployDBApp app = new DeployDBApp()
    private WorkFlow workFlow = new WorkFlow(app)

    @Rule
    ResourceTestRule dropwizard = ResourceTestRule.builder()
                .addResource(new EnvironmentResource(workFlow)).build();

    def "EnvironmentResource byName returns valid item when exists"() {
        given:
        Client client = dropwizard.client()
        String environmentIdent = 'integ'
        Environment environment = new Environment()
        environment.ident = environmentIdent
        workFlow.environmentRegistry = new ModelRegistry<Environment>()
        workFlow.environmentRegistry.put(environmentIdent, environment)

        when:
        Environment fetched = client.target(dropwizard.jerseyTest.baseUri)
                .path("/api/environments/${environmentIdent}")
                .request()
                .get(Environment.class)

        then:
        fetched == environment
    }
}
