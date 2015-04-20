package deploydb.auth

import com.fasterxml.jackson.annotation.JsonProperty
import com.google.common.cache.CacheBuilderSpec
import io.dropwizard.util.Duration
import javax.validation.Valid
import org.hibernate.validator.constraints.NotEmpty


/**
 * LdapConfiguration
 *
 * Contains LDAP specific configuration
 *
 * - All the attributes have defaults, hence none of these (except uri) can be null
 * - @Valid on certain attributes ensures that contents are properly formatted
 * - @NotEmpty ensures that user cannot skip configuring them
 */
class LdapConfiguration {

    /**
     * Uri to LDAP Server
     *
     * - Valid format: ldap://<hostname>:<optional port number>
     * - "uri" can be null only if we are using default setting. In that case
     *   no authentication is performed.
     * - if "uri" is empty or invalid, then deploydb will attempt to connect and
     *   authentication will fail
     */
    @Valid
    @JsonProperty
    private URI uri = null

    /** Cache policy cannot be null, but it can be empty i.e. no caching */
    @JsonProperty
    private CacheBuilderSpec cachePolicy = CacheBuilderSpec.disableCaching()

    @NotEmpty
    @JsonProperty
    private String userFilter = "ou=people,dc=example,dc=com"

    @NotEmpty
    @JsonProperty
    private String groupFilter = "ou=groups,dc=example,dc=com"

    @NotEmpty
    @JsonProperty
    private String userNameAttribute = "cn"

    @NotEmpty
    @JsonProperty
    private String groupNameAttribute = "cn"

    @NotEmpty
    @JsonProperty
    private String groupMembershipAttribute = "memberUid"

    @NotEmpty
    @JsonProperty
    private String groupClassName = "posixGroup"

    @Valid
    @JsonProperty
    private Duration connectTimeout = Duration.milliseconds(500)

    @Valid
    @JsonProperty
    private Duration readTimeout = Duration.milliseconds(500)

    /** Validate uri */
    boolean isValidLdapUri() {
        println "uri = ${uri.toString()}"
        try {
            URI u = URI.create(uri.toString());
            return "ldap".equals(u.getScheme())
        } catch (Exception ex) {
            println "$uri - validation failed: " + ex.getMessage()
        }
        return false
    }
}