package deploydb.dao

import deploydb.models.Artifact
import deploydb.models.Flow
import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO
import org.hibernate.Session
import org.hibernate.criterion.Restrictions

/**
 * Class to represent Data Access Object for Flow
 */
@InheritConstructors
class FlowDAO extends AbstractDAO<Flow> {

    void deleteFlowByArtifactNameGroupVersion(String group,
                                              String name,
                                              String version) {
        Session session = currentSession()

        // We can't find the flow using artifact name, group and version, so
        // we need to fetch the artifact, and use artifact id to fetch the flow
        ArtifactDAO artifactDAO = new ArtifactDAO(currentSession().getSessionFactory())
        Artifact artifact = artifactDAO.criteria().add(Restrictions.eq('group', group))
                .add(Restrictions.eq('name', name)).add(Restrictions.eq('version', version)).uniqueResult()
        if(artifact == null) {
            return
        }
        Flow flow = criteria().add(Restrictions.eq('artifact.id', artifact.id)).uniqueResult()

        // now delete the found flow
        session.delete(flow)
    }
}