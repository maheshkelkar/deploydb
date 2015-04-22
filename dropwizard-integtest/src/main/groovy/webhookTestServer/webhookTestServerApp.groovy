package dropwizardintegtest

import io.dropwizard.setup.Bootstrap

import io.dropwizard.Application
import io.dropwizard.setup.Environment

/**
 * Class for WebhookTestServer. Based on the configuration, this class
 * will send appropriate responses
 */
class webhookTestServerApp extends Application<webhookTestServerConfiguration>{
        private RequestWebhookObject requestWebhookObject
    private ResponseWebhookObject responseWebhookObject

    static void main(String[] args) throws Exception {
        new webhookTestServerApp().run(args)
    }

    @Override
    String getName() {
        return 'webhookTestServer'
    }

    @Override
    public void initialize(Bootstrap<webhookTestServerConfiguration> bootstrap) {
        requestWebhookObject = new RequestWebhookObject()
        responseWebhookObject = new ResponseWebhookObject()
    }

    @Override
    public void run(webhookTestServerConfiguration configuration,
                    Environment environment) {

        environment.healthChecks().register('sanity', new webhookTestServerHealthCheck())

        /**
         * FIXME: remove this after testing
         */
        responseWebhookObject.responseCode = "201"
        responseWebhookObject.delayBeforeResponseInSecs = 0

        environment.jersey().register(new RootResource())
        environment.jersey().register(new TestCallBackobjectResource(requestWebhookObject,
                responseWebhookObject))

    }
}
