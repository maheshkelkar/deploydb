package deploydb.auth

import com.google.common.cache.CacheBuilderSpec
import io.dropwizard.util.Duration
import javax.validation.Valid


class LdapConfiguration {

    @Valid
    private URI uri = null

    @Valid
    private CacheBuilderSpec cachePolicy = CacheBuilderSpec.disableCaching()

    private String userFilter = "ou=people,dc=example,dc=com"

    private String groupFilter = "ou=groups,dc=example,dc=com"

    private String userNameAttribute = "cn"

    private String groupNameAttribute = "cn"

    private String groupMembershipAttribute = "memberUid"

    private String groupClassName = "posixGroup"

    @Valid
    private Duration connectTimeout = Duration.milliseconds(500)

    @Valid
    private Duration readTimeout = Duration.milliseconds(500)

    URI getUri() {
        return uri
    }

    LdapConfiguration setUri(URI uri) {
        this.uri = uri
        return this
    }

    CacheBuilderSpec getCachePolicy() {
        return cachePolicy
    }

    LdapConfiguration setCachePolicy(CacheBuilderSpec cachePolicy) {
        this.cachePolicy = cachePolicy
        return this
    }

    String getUserFilter() {
        return userFilter
    }

    LdapConfiguration setUserFilter(String userFilter) {
        this.userFilter = userFilter
        return this
    }

    String getGroupFilter() {
        return groupFilter
    }

    LdapConfiguration setGroupFilter(String groupFilter) {
        this.groupFilter = groupFilter
        return this
    }

    String getUserNameAttribute() {
        return userNameAttribute
    }

    LdapConfiguration setUserNameAttribute(String userNameAttribute) {
        this.userNameAttribute = userNameAttribute
        return this
    }

    String getGroupNameAttribute() {
        return groupNameAttribute
    }

    LdapConfiguration setGroupNameAttribute(String groupNameAttribute) {
        this.groupNameAttribute = groupNameAttribute
        return this
    }

    String getGroupMembershipAttribute() {
        return groupMembershipAttribute
    }

    LdapConfiguration setGroupMembershipAttribute(String groupMembershipAttribute) {
        this.groupMembershipAttribute = groupMembershipAttribute
        return this
    }

    String getGroupClassName() {
        return groupClassName
    }

    LdapConfiguration setGroupClassName(String groupClassName) {
        this.groupClassName = groupClassName
        return this
    }

    Duration getConnectTimeout() {
        return connectTimeout
    }

    LdapConfiguration setConnectTimeout(Duration connectTimeout) {
        this.connectTimeout = connectTimeout
        return this
    }

    Duration getReadTimeout() {
        return readTimeout
    }

    LdapConfiguration setReadTimeout(Duration readTimeout) {
        this.readTimeout = readTimeout
        return this
    }
}