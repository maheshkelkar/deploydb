package deploydb.models.promotion

import com.fasterxml.jackson.annotation.JsonProperty
import deploydb.auth.User
import io.dropwizard.validation.ValidationMethod
import org.hibernate.validator.constraints.NotEmpty
import org.slf4j.Logger
import org.slf4j.LoggerFactory


/**
 *  Class for promotion of the deployment from one environment to
 *  next in a pipeline
 */
class Promotion {
    private static final Logger logger = LoggerFactory.getLogger(Promotion.class)

    /**
     * Promotion identifier
     *
     * Retrieved from the configuration base filename. Used as a key in
     * registry
     */
    @JsonProperty
    String ident

    /**
     * Type (i.e.) full class name for the impl class
     */
    @NotEmpty
    @JsonProperty
    String type

    /**
     * Validate contents of "type" using following annotation
     *
     * @return true if its a valid class name
     */
    @ValidationMethod(message = "Promotion does not have a valid class name in \"type\"")
    boolean isType() {
        try {
            PromotionImpl impl = getPromotionImpl()
        } catch (all) {
            return false
        }
        return true
    }

    /**
     * Description of this promotion
     */
    @JsonProperty
    String description

    /**
     *  Parse all attributes
     */
    @JsonProperty
    Map<String, Object> attributes = null

    /**
     * Empty constructor used by Jackson during deserialization
     */
    Promotion() { }

    /**
     * Constructor with Arguments
     */
    Promotion(String ident, String type, String description) {
        this.ident = ident
        this.type = type
        this.description = description
    }

    /**
     * Get Promotion implementation interface
     *
     * @throws
     * ClassNotFoundException - if the class is not found
     * IllegalAccessException - if the class or its nullary constructor is not accessible.
     * InstantiationException - if this Class represents an abstract class, an interface,
     *                          an array class, a primitive type, or void
     *                          or if the class has no nullary constructor
     *                          or if the instantiation fails for some other reason.
     */
    private PromotionImpl getPromotionImpl() throws
            ClassNotFoundException,
            InstantiationException,
            IllegalAccessException {
        return ClassLoader.getSystemClassLoader().loadClass(this.type).getDeclaredConstructor().newInstance()
    }

    /**
     * Validate the given promotion
     */
    boolean validate(User user) {
        try {
            return getPromotionImpl().validate(user, attributes)
        } catch (Exception ex) {
            logger.error("\"${this.ident}\" Promotion failed with exception", ex)
        }
        return false
    }

    /**
     *  Compare function
     */
    @Override
    boolean equals(Object o) {

        /* First object identity */
        if (this.is(o)) {
            return true
        }

        if (!(o instanceof Promotion)) {
            return false
        }

        final Promotion that = (Promotion)o

        return Objects.equals(this.ident, that.ident) &&
                Objects.equals(this.type, that.type) &&
                Objects.equals(this.description, that.description)
    }

    @Override
    int hashCode() {
        return Objects.hash(this.ident, this.type, this.description)
    }

    /**
     * Stringy the promotion
     */
    @Override
    String toString() {
        return "ident = ${ident}, type = ${type}, description = ${description}, " +
                "attributes = ${attributes}"
    }
}

