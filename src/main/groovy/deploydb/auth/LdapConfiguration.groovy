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
     * - Valid format: ldap[s]://<hostname>:<optional port number>
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

    /**
     * Base domain component
     *
     * Used as a base name in the LDAP search query
     */
    @NotEmpty
    @JsonProperty
    private String baseDC = "dc=example,dc=com"

    /** Bind Username */
    @NotEmpty
    @JsonProperty
    private String bindDN = "cn=admin"

    /** Bind password */
    @NotEmpty
    @JsonProperty
    private String bindPassword = "secret"

    /**
     * User common name prefix
     *
     * Used in LDAP search query to:
     * - filter matches e.g. (&(cn=username)(objectClass=posixUser))
     * - control returned attributes in the matched entry
     */
    @NotEmpty
    @JsonProperty
    private String userNamePrefix = "cn"

    /**
     * User object class name
     *
     * This is used in the query to search user data record in AD
     *
     * An objectClass is a collection of attributes (or an attribute container).
     * More info can be found at <http://www.zytrax.com/books/ldap/ch3/#objectclasses>
     */
    @NotEmpty
    @JsonProperty
    private String userObjectClass = "posixUser"

    /**
     * Group common name prefix
     *
     * Used in LDAP search query to:
     * - control returned attributes in the matched entry
     */
    @NotEmpty
    @JsonProperty
    private String groupNamePrefix = "cn"

    /**
     * Group membership prefix
     *
     * Note that attribute value for this prefix is assumed to userDN (distinguished name)
     * E.g. cn=username,OU=users,DC=example,DC=com
     *
     * Used in LDAP search query to:
     * - filter matches e.g. (&(memberUid=cn=username,OU=users,DC=example,DC=com)(objectClass=posixGroup))
     */
    @NotEmpty
    @JsonProperty
    private String groupMembershipPrefix = "memberUid"

    /**
     * Group object class name
     *
     * This is used in the query to search group data record in AD
     *
     * An objectClass is a collection of attributes (or an attribute container).
     * More info can be found at <http://www.zytrax.com/books/ldap/ch3/#objectclasses>
     */
    @NotEmpty
    @JsonProperty
    private String groupObjectClass = "posixGroup"

    /**
     * Domain name prefix
     *
     * Used in LDAP search query to:
     * - controls returned attributes in the matched entry
     */
    @NotEmpty
    @JsonProperty
    private String distinguishedNamePrefix = "dn"

    @Valid
    @JsonProperty
    private Duration connectTimeout = Duration.milliseconds(500)

    @Valid
    @JsonProperty
    private Duration readTimeout = Duration.milliseconds(500)
}