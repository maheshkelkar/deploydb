package deploydb.dao

import deploydb.models.Flow
import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO
import org.hibernate.Session
import org.hibernate.criterion.Order
import org.hibernate.criterion.Restrictions

/**
 * Class to represent Data Access Object for Flow
 */
@InheritConstructors
class FlowDAO extends AbstractDAO<Flow> {

    /**
     * Delete the flow based on Artifact id. This function will delete the assocaited models -
     * Artifact, Deployments and PromotionResults
     * @param id Artifact id of the flow
     */
    void deleteFlowByArtifactId(long id) {
        Session session = currentSession()
        Flow flow = criteria().add(Restrictions.eq('artifact.id', id)).uniqueResult()

        // now delete the found flow
        session.delete(flow)
    }

    /**
     * Locate an Flow based on the (group, name) pair
     *
     * @param pageNumber A valid page number for pagination
     * @param perPageSize A valid per page size
     */
    List<Flow> getByPage(int pageNumber, int perPageSize) {

        List<Flow> flows = criteria()
                .setFirstResult(pageNumber)
                .setMaxResults(perPageSize)
                .addOrder(Order.asc('id')).list()

        for (Flow flow : flows) {
            println "***MVK: flow = ${flow}"
        }
        return flows
    }
}