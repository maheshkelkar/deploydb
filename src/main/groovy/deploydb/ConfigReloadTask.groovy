package deploydb

import com.codahale.metrics.annotation.Timed
import com.google.common.collect.ImmutableMultimap
import io.dropwizard.servlets.tasks.Task
import org.slf4j.Logger
import org.slf4j.LoggerFactory


/**
 * Admin task to reload DeployDB configuration
 */
class ConfigReloadTask extends Task {
    private WorkFlow workFlow
    private static final Logger logger = LoggerFactory.getLogger(ConfigReloadTask.class)

    /**
     * Constructor
     *
     * @param workFlow - store the workFlow for executing load config
     */
    ConfigReloadTask(WorkFlow workFlow) {
        super('configReload')
        this.workFlow = workFlow
    }

    @Timed
    @Override
    void execute(ImmutableMultimap<String, String> parameters, PrintWriter output) throws Exception {

        this.workFlow.deployDBApp.withHibernateSession() {
            try {
                this.workFlow.loadConfigModels()
                output.println("Done!")
            } catch (Exception e) {
                logger.error("failed to reload the config with an exception: ", e)
                output.println("Failed: " + e.getMessage())
                throw e
            }
        }
    }
}