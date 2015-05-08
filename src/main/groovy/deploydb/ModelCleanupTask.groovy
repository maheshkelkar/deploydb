package deploydb

import com.codahale.metrics.annotation.Timed
import com.google.common.collect.ImmutableMultimap
import deploydb.models.Artifact
import io.dropwizard.servlets.tasks.Task
import org.slf4j.Logger
import org.slf4j.LoggerFactory

/**
 * Admin task to Cleanup models in the deploydb
 */
class ModelCleanupTask extends Task {
    private WorkFlow workFlow
    private static final Logger logger = LoggerFactory.getLogger(ConfigReloadTask.class)

    /**
     * Constructor
     *
     * @param workFlow - store the workFlow for executing load config
     */
    ModelCleanupTask(WorkFlow workFlow) {
        super('modelCleanup')
        this.workFlow = workFlow
    }

    @Timed
    @Override
    void execute(ImmutableMultimap<String, String> parameters, PrintWriter output) throws Exception {

        String group = String.valueOf(parameters.get("group").toArray()[0])
        String name = String.valueOf(parameters.get("name").toArray()[0])
        String version = String.valueOf(parameters.get("version").toArray()[0])

        this.workFlow.deployDBApp.withHibernateSession() {
            try {
                // Lets fetch the artifact using name, group and version
                Artifact artifact = this.workFlow.artifactDAO.findArtifactByGroupNameVersion(
                        group, name,version)
                if(artifact == null) {
                    return
                }
                // Now delete flow using the artifact id
                this.workFlow.flowDAO.deleteFlowByArtifactId(artifact.id)
                output.println("Done!")
            } catch (Exception e) {
                logger.error("Cleanup of the model failed with an exception: ", e)
                output.println("Failed: " + e.getMessage())
                throw e
            }
        }
    }
}