package deploydb.models

import deploydb.ModelType
import com.fasterxml.jackson.annotation.JsonProperty
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.EnumType
import javax.persistence.Enumerated
import javax.persistence.Table
import org.hibernate.validator.constraints.NotEmpty

/**
 * Representation class for the concept of an ModelConfig
 */
@Entity
@Table(name='modelConfigs')
class ModelConfig extends AbstractModel {

    @NotEmpty
    @Column(name="checksum", nullable=false)
    @JsonProperty
    String checksum

    @NotEmpty
    @Column(name="contents", nullable=false)
    @JsonProperty
    String contents

    @NotEmpty
    @Column(name='ident', nullable=false)
    @JsonProperty
    String ident

    @Column(name='modelType', nullable=false)
    @Enumerated(EnumType.ORDINAL)
    @JsonProperty
    ModelType modelType

    /**
     * Empty constructor used by Jackson for object deserialization
     */
    ModelConfig() { }

    /**
     *  Default constructor to be used by DeployDB internally. It accepts all
     *  of the required parameters for the database
     */
    ModelConfig(String checksum,
                String contents,
                String ident,
                ModelType modelType) {
        this.checksum = checksum
        this.contents = contents
        this.ident = ident
        this.modelType = modelType
    }

    @Override
    boolean equals(Object o) {
        /* First object identity */
        if (this.is(o)) {
            return true
        }

        if (!(o instanceof ModelConfig)) {
            return false
        }

        final ModelConfig that = (ModelConfig)o

        return Objects.equals(this.id, that.id) &&
                Objects.equals(this.checksum, that.checksum) &&
                Objects.equals(this.contents, that.contents) &&
                Objects.equals(this.ident, that.ident) &&
                Objects.equals(this.modelType, that.modelType)
    }

    @Override
    int hashCode() {
        return Objects.hash(this.id, this.checksum, this.contents,
                this.ident, this.modelType)
    }

    @Override
    String toString() {
        return "id: ${id}, checksum: ${checksum}, contents: \"${contents}\", " +
                "ident: ${ident}, modelType: ${modelType}"

    }
}
