package deploydb.models

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonProperty
import deploydb.Status
import org.hibernate.annotations.Fetch
import org.hibernate.annotations.FetchMode

import javax.persistence.Column
import javax.persistence.CascadeType
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.FetchType
import javax.persistence.JoinColumn
import javax.persistence.OneToMany
import javax.persistence.OneToOne
import javax.persistence.OrderBy
import javax.persistence.Table
//import java.util.LinkedHashSet


/**
 * Class to represent the flow as artifact moves from one
 * deployment to next one.
 */
@Entity
@Table(name='flows')
class Flow extends AbstractModel {

    @OneToOne(cascade = CascadeType.ALL, optional=false)
    @JoinColumn(name='artifactId', unique=false, nullable=false, updatable=false)
    @JsonProperty
    Artifact artifact


    @OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER, mappedBy = "flow")
    @JsonProperty
    @OrderBy(value = "id")
    /**
     * Following setting dictates how to fetch the child tables.
     *
     * Use of FetchMode.SUBSELECT annotation forces hibernate to not use the Join,
     * and instead sends multiple sql calls to the db to retrieve the data,
     * thus eliminating the duplicates.
     *
     * This is different than the "fetch=FetchType.Eager"" setting in OneToMany
     * annotation which controls whether to fetch child tables or not
     */
    @Fetch(FetchMode.SUBSELECT)
    Set<Deployment> deployments = new LinkedHashSet<Deployment>()

    @Column(name="service")
    @JsonProperty(value = "service")
    String serviceIdent

    /** Checksum of configuration of all the Models */
    @Column(name="checksum")
    @JsonIgnore
    String configChecksum

    @Column(name="status")
    @Enumerated(EnumType.ORDINAL)
    @JsonIgnore
    Status status = Status.CREATED

    /**
     * Empty constructor used by Jackson for object deserialization
     */
    Flow() { }

    /**
     * Default constructor to create a valid Flow object to save in
     * the database
     */
    Flow(Artifact deployedArtifact, String serviceIdent, String configChecksum) {
        this.artifact = deployedArtifact
        this.serviceIdent = serviceIdent
        this.configChecksum = configChecksum
    }

    /**
     * Add Promotion Result to collection
     */
    boolean addDeployment(Deployment deployment) {
        deployment.flow = this
        return deployments.add(deployment)
    }

    /**
     * Equality operator
     *
     * @param o Object to test equality
     * @return True if the objects are equal otherwise false
     */
    @Override
    boolean equals(Object o) {
        /* First object identity */
        if (this.is(o)) {
            return true
        }

        if (!(o instanceof Flow)) {
            return false
        }

        final Flow that = (Flow)o

        return Objects.equals(this.id, that.id) &&
                Objects.equals(this.artifact, that.artifact) &&
                Objects.equals(this.deployments, that.deployments) &&
                Objects.equals(this.serviceIdent, that.serviceIdent) &&
                Objects.equals(this.configChecksum, that.configChecksum)
    }

    /**
     * Compute the hash of the flow using memeber variables
     *
     * @return Computed hash code
     */
    @Override
    int hashCode() {
        return Objects.hash(this.id, this.artifact, this.deployments,
                this.serviceIdent, this.configChecksum)
    }

    /**
     * Stringfy the flow object
     *
      * @return String representation of flow
     */
    @Override
    String toString() {
        return "id = ${id}, artifact: ${artifact}, deployments: ${deployments}, " +
                "serviceIdent: ${serviceIdent}, configChecksum: ${configChecksum}"
    }

}
