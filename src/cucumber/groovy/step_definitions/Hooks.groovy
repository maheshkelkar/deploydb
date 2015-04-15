import deploydb.AppHelper
import deploydb.ModelHelper

import org.joda.time.DateTime
import org.joda.time.DateTimeUtils

this.metaClass.mixin(cucumber.api.groovy.Hooks)

Before {
    def env = System.getenv()
    databaseProv = env['DB'] == null ? "h2" : env['DB']
    startAppWithConfiguration("deploydb.${databaseProv}.cucumber.yml")
    startWebhookTestServerWithConfiguration('webhookTestServer.example.yml')
}

After {
    stopApp()
    stopWebhookTestServerApp()
}

Before('@freezetime') {
    DateTimeUtils.setCurrentMillisFixed(DateTime.now().millis)
}

After('@freezetime') {
    DateTimeUtils.setCurrentMillisSystem()
}

World {
  new AppHelper()
}

World {
    new ModelHelper()
}
