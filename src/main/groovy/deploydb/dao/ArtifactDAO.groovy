package deploydb.dao

import groovy.transform.InheritConstructors
import io.dropwizard.hibernate.AbstractDAO
import org.hibernate.criterion.Restrictions
import org.hibernate.criterion.Order

import deploydb.models.Artifact

/**
 * Artifact Data access object
 */
@InheritConstructors
class ArtifactDAO extends AbstractDAO<Artifact> {

    /**
     * Locate an Artifact based on the (group, name) pair
     *
     * @param group A valid group name (e.g. "com.example")
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    List<Artifact> findByGroupAndName(String group, String name, int pageNumber, int perPageSize) {

        List<Artifact> artifacts = criteria().add(Restrictions.eq('group', group))
                          .add(Restrictions.eq('name', name))
                          .setFirstResult(pageNumber)
                          .setMaxResults(perPageSize)
                          .addOrder(Order.desc('createdAt')).list()
        return artifacts
    }

    /**
     * Locate the latest Artifact based on the (group, name) pair
     *
     * @param group A valid group name (e.g. "com.example")
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    Artifact findLatestByGroupAndName(String group, String name) {

        List<Artifact> artifacts = criteria().add(Restrictions.eq('group', group))
                          .add(Restrictions.eq('name', name))
                          .addOrder(Order.desc('createdAt')).list()
        if(artifacts.size() > 0) {
            return artifacts.last()
        }
        return null
    }

    /**
     * Locate an Artifact based on generic query parameter
     *
     * @param group A valid group name (e.g. "com.example")
     * @param name The artifact's name (e.g. "dropwizard-core")
     */
    List<Artifact> findByQuery(String type) {
        // Make the type wild card
        type = "%"+type+"%"

        // logically "or" all the columns you want to search on
        List<Artifact> artifacts = criteria().add( Restrictions.disjunction()
                                               .add(Restrictions.like('name', type))
                                               .add(Restrictions.like('group', type))
                                               .add(Restrictions.like('version', type)))
                                             .addOrder(Order.desc('createdAt'))
                                             .list()
        return artifacts
    }

}
