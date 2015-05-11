package dropwizardintegtest

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider
import com.github.mustachejava.DefaultMustacheFactory
import com.github.mustachejava.Mustache

import org.glassfish.jersey.client.ClientConfig
import javax.ws.rs.client.Client
import javax.ws.rs.client.ClientBuilder
import org.glassfish.jersey.apache.connector.ApacheConnectorProvider
import org.glassfish.jersey.client.JerseyInvocation
import javax.ws.rs.core.Response
import javax.ws.rs.client.Entity

/**
 * This class is used by the spock integration test suites and UAT tests. This will be used by
 * clients to send REST calls to servers and return responses from the server for further
 * processing in the client code
 */
class IntegrationRestApiClient {
    private Client jerseyClient = null
    String host = "http://localhost"
    int port = 8080

    String processTemplate(String buffer, Map scope) {
        DefaultMustacheFactory mf = new DefaultMustacheFactory()
        StringWriter writer = new StringWriter()
        Mustache m = mf.compile(new StringReader(buffer),
                'cuke-stash-compiler')
        m.execute(writer, scope)

        return writer.toString()
    }

    Client getClient() {
        if (this.jerseyClient == null) {
            ClientConfig clientConfig = new ClientConfig()
            clientConfig.connectorProvider(new ApacheConnectorProvider())
            clientConfig.register(JacksonJsonProvider.class);
            this.jerseyClient = ClientBuilder.newClient(clientConfig)
        }
        return this.jerseyClient
    }

    /**
     * Create the proper full URL for our running app with the given path.
     *
     * If this is an admin request, we'll hit the admin port correctly
     */
    String urlWithPort(String path, Boolean isAdmin) {
        return host + String.format(":%d${path}", port)
    }


    JerseyInvocation makeRequestToPath(String path, String method, Entity entity) {
        return this.makeRequestToPath(path, method, entity, false)
    }

    JerseyInvocation makeRequestToPath(String path, String method, Entity entity, Boolean isAdmin) {
        return client.target(urlWithPort(path, isAdmin))
                .request()
                .build(method, entity)
    }

    /**
     * Execute a POST to the test server for step definitions
     */
    Response postJsonToPath(String path, String requestBody, Boolean isAdmin) {
        return this.makeRequestToPath(path, 'POST', Entity.json(requestBody), isAdmin).invoke()
    }

    /**
     * Execute a PATCH to the test server for step definitions
     */
    Response patchJsonToPath(String path, String requestBody) {
        return this.makeRequestToPath(path, 'PATCH', Entity.json(requestBody)).invoke()
    }

    Response deleteFromPath(String path) {
        return this.makeRequestToPath(path, 'DELETE', null).invoke()
    }

    /**
     * Minor convenience method to make sure we're dispatching GET requests to the
     * right port in our test application
     */
    Response getFromPath(String path, boolean isAdmin) {
        return this.makeRequestToPath(path, 'GET', null , isAdmin).invoke()
    }
}
