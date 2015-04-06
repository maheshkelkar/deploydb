package deploydb.dao

import org.hibernate.Criteria
import org.hibernate.SessionFactory
import spock.lang.*

class DeploymentDAOSpec extends Specification {
    private DeploymentDAO dao
    private SessionFactory sessionFactory = Mock(SessionFactory)

    def "ensure the constructor works"() {
        given:
        DeploymentDAO dao

        when:
        dao = new DeploymentDAO(sessionFactory)

        then:
        dao instanceof DeploymentDAO
    }

    def "getByArtifactId() should return null if there are no deployments"() {
        given:
        DeploymentDAO dao = Spy(DeploymentDAO, constructorArgs: [sessionFactory])
        def criteria = Mock(Criteria)
        criteria./add|set|addOrder|setMaxResults|setFirstResult/(_) >> criteria
        _ * dao.criteria() >> criteria
        1 * criteria.list() >> []

        expect:
        dao.getByArtifactId(1).isEmpty()
    }

}
