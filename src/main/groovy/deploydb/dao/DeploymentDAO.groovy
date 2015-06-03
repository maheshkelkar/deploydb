package deploydb.dao

import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO

import deploydb.models.Deployment
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
                .addOrder(Order.asc('id')).list()
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
                .addOrder(Order.desc('createdAt'))
                .addOrder(Order.asc('id')).list()
        if (deployments.size() > 0) {
            return deployments.last()
        }
        return null

    }

    /**
     * Find deployments for an artifact using id
     *
     * @param artifactId id of the artifact
     * @return deployments
     */
    List<Deployment> getByArtifactId(long artifactId) {
        List<Deployment> deployments = criteria()
                                         .add(Restrictions.eq('artifact.id', artifactId))
                                         .addOrder(Order.asc('id'))
                                         .list()
        return deployments
    }

    /**
     * Find deployments for an environment
     *
     * @param envIdent identity of the Environment
     * @return deployments list of Deployments
     */
    List<Deployment> getByEnvironmentIdent(String envIdent,
                                           int pageNumber, int perPageSize) {
        List<Deployment> deployments = criteria()
                .add(Restrictions.eq('environmentIdent', envIdent))
                .setFirstResult(pageNumber)
                .setMaxResults(perPageSize)
                .addOrder(Order.asc('id'))
                .list()
        return deployments
    }

    /**
     * Find deployments for an service
     *
     * @param serviceIdent identity of the Service
     * @return deployments list of Deployments
     */
    List<Deployment> getByServiceIdent(String serviceIdent,
                                       int pageNumber, int perPageSize) {
        List<Deployment> deployments = criteria()
                .add(Restrictions.eq('serviceIdent', serviceIdent))
                .setFirstResult(pageNumber)
                .setMaxResults(perPageSize)
                .addOrder(Order.asc('id'))
                .list()
        return deployments
    }
}
