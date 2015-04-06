package deploydb.models

import com.fasterxml.jackson.annotation.JsonProperty
import deploydb.models.Webhook.Webhook

import org.hibernate.validator.constraints.NotEmpty

/**
 * Representation class for the concept of a Environment
 */
class Environment {

    /**
     * Environment identifier
     *
     * Retrieved from the configuration base filename. Used as a key in
     * registry
     */
    @JsonProperty
    String ident

    /**
     * Environment description
     */
    @NotEmpty
    @JsonProperty
    String description

    /**
     * Webhook
     */
    @JsonProperty
    Webhook webhook

    /**
     * Empty constructor used by Jackson for object deserialization
     */
    Environment() { }

    /**
     *  Constructor to be used by DeployDB internally. It accepts all
     *  of the parameters
     */
    Environment(String ident,
                String description,
                Webhook webhook) {
        this.ident = ident
        this.description = description
        this.webhook = webhook
    }

    @Override
    boolean equals(Object o) {

        /* First object identity */
        if (this.is(o)) {
            return true
        }

        if (!(o instanceof Environment)) {
            return false
        }

        final Environment that = (Environment)o

        return Objects.equals(this.ident, that.ident) &&
                Objects.equals(this.description, that.description) &&
                Objects.equals(this.webhook, that.webhook)
    }

    @Override
    int hashCode() {
        return Objects.hash(this.ident, this.description, this.webhook)
    }

    @Override
    String toString() {
        return "ident = ${ident}, description: ${description}, webhook: ${webhook}"
    }
}
