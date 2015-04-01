package deploydb.dao

import deploydb.models.Artifact
import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO

import deploydb.models.Deployment
import org.hibernate.Query
import org.hibernate.criterion.Order
import org.hibernate.criterion.Restrictions

/**
 * Deployment Data access object
 */
@InheritConstructors
class DeploymentDAO extends AbstractDAO<Deployment> {

    /**
     * Locate an Deployment based on the (group, name) pair
     *
     * @param pageNumber A valid page number for pagination
     * @param perPageSize A valid per page size
     */
    List<Deployment> getByPage(int pageNumber, int perPageSize) {

        List<Deployment> deployments = criteria()
                .setFirstResult(pageNumber)
                .setMaxResults(perPageSize)
                .addOrder(Order.desc('createdAt')).list()
        return deployments
    }

    /**
     * Locate the latest Deployment based on the (group, name) pair
     *
     * @param pageNumber A valid page number for pagination
     * @param perPageSize A valid per page size
     */
    Deployment getLatest() {

        List<Deployment> deployments = criteria()
                .addOrder(Order.desc('createdAt')).list()
        if (deployments.size() > 0) {
            return deployments.last()
        }
        return null

    }

    /**
     * Locate the Deployments based on the artifact id
     *
     * @param pageNumber A valid page number for pagination
     * @param perPageSize A valid per page size
     */
    List<Deployment> getByArtifactId(long artifactId) {

        println("artifactid: ${artifactId}")
        Artifact artifact = new Artifact()
        artifact.id = artifactId

        Query query = currentSession().createQuery("select d from Deployment as d where d.artifact=:artifact")
                      .setParameter("artifact", artifact)

        @SuppressWarnings("unchecked")
        List<Deployment> deploymentsList = query.list()
//        List<Deployment> deployments = currentSession().createCriteria(Deployment.class)
//                .add(Restrictions.eq('artifact.id', artifactId))
//                .addOrder(Order.desc('createdAt'))
//                .list()
        println("deploymentsList: ${deploymentsList}")
        return deploymentsList
    }
}
