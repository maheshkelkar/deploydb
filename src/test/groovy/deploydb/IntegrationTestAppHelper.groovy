package deploydb

import deploydb.models.Webhook.Webhook

import org.hibernate.Session
import org.hibernate.SessionFactory
import org.hibernate.context.internal.ManagedSessionContext
import dropwizardintegtest.StubAppRunner
import dropwizardintegtest.TestLdapServer
import dropwizardintegtest.WebhookTestServerAppRunner
import dropwizardintegtest.webhookTestServerApp

class IntegrationTestAppHelper {
    private StubAppRunner runner = null
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

    /*
     *  Get url path from webhook config body
     */
    List<String> getUrlPathFromWebhookConfigBody(String configBody, String eventType) {
        ModelLoader<Webhook> webhookLoader = new
                ModelLoader<Webhook>(Webhook.class)
        Webhook webhook = webhookLoader.loadFromString(configBody)
        return getUrlPathFromWebhook(webhook, configBody, eventType)
    }

    /** Set config directory */
    void setConfigDirectory(String configDirectory) {
        this.runner.setConfigDirectory(configDirectory)
    }

    void startAppWithConfiguration(String config) {
        if (this.runner != null) {
            return
        }
        println("start application with config ${config}")
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
        println("start webhook test server with config ${config}")
        this.webhookRunner = new WebhookTestServerAppRunner(webhookTestServerApp.class, config)
        this.webhookRunner.start()
    }


    void stopWebhookTestServerApp() {
        if (this.webhookRunner != null) {
            this.webhookRunner.stop()
        }
    }
}
