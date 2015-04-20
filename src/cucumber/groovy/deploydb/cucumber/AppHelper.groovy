package deploydb

import deploydb.cucumber.TestLdapServer
import deploydb.models.Webhook.Webhook
import com.github.mustachejava.DefaultMustacheFactory
import com.github.mustachejava.Mustache

import io.dropwizard.auth.basic.BasicCredentials

import org.glassfish.jersey.client.ClientConfig
import javax.ws.rs.client.Client
import javax.ws.rs.client.ClientBuilder
import org.glassfish.jersey.apache.connector.ApacheConnectorProvider
import org.glassfish.jersey.client.JerseyInvocation
import javax.ws.rs.core.Response
import javax.ws.rs.client.Entity

import org.hibernate.Session
import org.hibernate.SessionFactory
import org.hibernate.context.internal.ManagedSessionContext
import dropwizardintegtest.StubAppRunner
import dropwizardintegtest.WebhookTestServerAppRunner
import dropwizardintegtest.webhookTestServerApp
import org.glassfish.jersey.client.authentication.HttpAuthenticationFeature

class AppHelper {
    private StubAppRunner runner = null
    private Client jerseyClient = null
    private WebhookTestServerAppRunner webhookRunner = null
    private TestLdapServer testLdapServer = null

    SessionFactory getSessionFactory() {
        return this.runner.sessionFactory
    }

    /**
     *  Execute the {@link Closure} with a properly set up
     *  {@link org.hibernate.Session}
     *
     * @param c (required) Closure to execute with a session
     */
    void withSession(Closure c) {
        final Session session = sessionFactory.openSession()
        try {
            ManagedSessionContext.bind(session)
            c.call()
        }
        finally {
            session.close()
        }
    }

    /**
     *  Execute the {@link Closure} with a proper Service Registry
     *
     * @param c (required) Closure to execute
     */
    void withServiceRegistry(Closure c) {
        c.call(this.runner.getApplication().workFlow.serviceRegistry)
    }

    /**
     *  Execute the {@link Closure} with a proper Environment Registry
     *
     * @param c (required) Closure to execute
     */
    void withEnvironmentRegistry(Closure c) {
        c.call(this.runner.getApplication().workFlow.environmentRegistry)
    }

    /**
     *  Execute the {@link Closure} with a proper Promotion Registry
     *
     * @param c (required) Closure to execute
     */
    void withPromotionRegistry(Closure c) {
        c.call(this.runner.getApplication().workFlow.promotionRegistry)
    }

   /**
    *  Execute the {@link Closure} with a proper Pipeline Registry
    *
    * @param c (required) Closure to execute
    */
    void withPipelineRegistry(Closure c) {
        c.call(this.runner.getApplication().workFlow.pipelineRegistry)
    }

    /**
     *  Execute the {@link Closure} with a proper WorkFlow object
     *
     * @param c (required) Closure to execute
     */
    void withWorkFlow(Closure c) {
        c.call(this.runner.getApplication().workFlow)
    }

    /**
     *  Execute the {@link Closure} with a proper TestWebhookServer
     *
     * @param c (required) Closure to execute
     */
    void withTestWebhookServer(Closure c) {
        c.call(this.webhookRunner.getApplication().requestWebhookObject)
    }

    /**
     *  Execute the {@link Closure} with a proper testWebhookServer's
     *  receivedWebhookObject
     *
     * @param c (required) Closure to execute
     */
    void withRequestWebhookObject(Closure c) {
        c.call(this.webhookRunner.getApplication().requestWebhookObject)
    }

    String processTemplate(String buffer, Map scope) {
        DefaultMustacheFactory mf = new DefaultMustacheFactory()
        StringWriter writer = new StringWriter()
        Mustache m = mf.compile(new StringReader(buffer),
                                'cuke-stash-compiler')
        m.execute(writer, scope)

        return writer.toString()
    }

    Client getClient(BasicCredentials credentials) {
        if (this.jerseyClient == null) {
            ClientConfig clientConfig = new ClientConfig()
            /** Register HTTP Authentication feature, if credentials are provided */
            if (credentials) {
                clientConfig.register(HttpAuthenticationFeature.basicBuilder().build())
            }
            clientConfig.connectorProvider(new ApacheConnectorProvider())
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
        int port = isAdmin ? runner.adminPort : runner.localPort
        return String.format("http://localhost:%d${path}", port)
    }

    /**
     * Prepare a HTTP request
     *
     * @param path
     * @param isAdmin
     * @param credentials
     * @return
     */
    JerseyInvocation.Builder makeRequestToPath(String path,
                                               Boolean isAdmin,
                                               BasicCredentials credentials) {
        return getClient(credentials)
                .target(urlWithPort(path, isAdmin))
                .request()
    }

    /**
     * Build the request with parameters
     *
     * @param builder
     * @param method
     * @param entity
     * @param credentials
     * @return
     */
    JerseyInvocation buildRequest(JerseyInvocation.Builder builder, String method,
                                  Entity entity, BasicCredentials credentials) {
        JerseyInvocation invocation = builder.build(method, entity)
        if (credentials) {
            invocation.property(HttpAuthenticationFeature.HTTP_AUTHENTICATION_BASIC_USERNAME,
                    credentials.username)
                    .property(HttpAuthenticationFeature.HTTP_AUTHENTICATION_BASIC_PASSWORD,
                    credentials.password)
        }
        return invocation
    }

    /**
     * Execute a POST to the test server for step definitions
     */
    Response postJsonToPath(String path, String requestBody, Boolean isAdmin,
                            BasicCredentials credentials) {
        JerseyInvocation.Builder builder = this.makeRequestToPath(path, isAdmin, credentials)
        return this.buildRequest(builder, 'POST', Entity.json(requestBody), credentials).invoke()
    }

    /**
     * Execute a PATCH to the test server for step definitions
     */
    Response patchJsonToPath(String path, String requestBody) {
        JerseyInvocation.Builder builder = this.makeRequestToPath(path, false, null)
        return this.buildRequest(builder, 'PATCH', Entity.json(requestBody), null).invoke()
    }

    Response deleteFromPath(String path) {
        JerseyInvocation.Builder builder = this.makeRequestToPath(path, false, null)
        return this.buildRequest(builder, 'DELETE', null, null).invoke()
    }

    /*
     *  Get url path from webhook config body
     */
    List<String> getUrlPathFromWebhookConfigBody(String configBody, String eventType) {
        ModelLoader<Webhook> webhookLoader = new
                ModelLoader<Webhook>(Webhook.class)
        Webhook webhook = webhookLoader.loadFromString(configBody)
        return getUrlPathFromWebhook(webhook, configBody, eventType)
    }

    /**
     * Get url paths from webhook
     */
    List<String> getUrlPathFromWebhook(Webhook webhook, String configBody, String eventType) {

        List<String> eventUrlList = []

        /*
         * For a valid webhook configuration, deployment and promotion are valid objects
         */
        if (webhook != null && webhook.deployment != null) {
            eventUrlList = this.runner.getApplication().webhooksManager.getMemberOfObject(
                    webhook.deployment, eventType)
        }
        if (webhook != null && webhook.promotion != null) {
            /*
             * Only event type valid for promotion is "completed", ignore all other types
             */
            if (eventType == "completed") {
                eventUrlList += this.runner.getApplication().webhooksManager.getMemberOfObject(
                        webhook.promotion, eventType)
            }
        }

        return eventUrlList.collect{ it.toURI().getPath() }
    }

    /**
     * Minor convenience method to make sure we're dispatching GET requests to the
     * right port in our test application
     */
    Response getFromPath(String path, boolean isAdmin, BasicCredentials credentials) {
        JerseyInvocation.Builder builder = this.makeRequestToPath(path, isAdmin, credentials)
        return this.buildRequest(builder, 'GET', null, credentials).invoke()
    }

    /** Set config directory */
    void setConfigDirectory(String configDirectory) {
        this.runner.setConfigDirectory(configDirectory)
    }

    void startAppWithConfiguration(String config) {
        if (this.runner != null) {
            return
        }
        this.runner = new StubAppRunner(DeployDBApp.class, config)
        this.runner.start()
        this.testLdapServer = new TestLdapServer()
        this.testLdapServer.start()
    }


    void stopApp() {
        if (this.runner != null) {
            this.runner.stop()
        }
        if (this.testLdapServer != null) {
            this.testLdapServer.stop()
        }
    }

    void startWebhookTestServerWithConfiguration(String config) {
        if (this.webhookRunner != null) {
            return
        }
        this.webhookRunner = new WebhookTestServerAppRunner(webhookTestServerApp.class, config)
        this.webhookRunner.start()
    }


    void stopWebhookTestServerApp() {
        if (this.webhookRunner != null) {
            this.webhookRunner.stop()
        }
    }
}
