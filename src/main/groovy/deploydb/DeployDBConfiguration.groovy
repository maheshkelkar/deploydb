package deploydb

import com.github.lookout.whoas.WhoasFactory
import com.google.common.collect.ImmutableMap
import com.fasterxml.jackson.annotation.JsonProperty
import io.dropwizard.Configuration
import io.dropwizard.db.DataSourceFactory
import io.dropwizard.flyway.FlywayFactory
import javax.validation.Valid
import javax.validation.constraints.NotNull


class DeployDBConfiguration extends Configuration {
    @Valid
    @NotNull
    @JsonProperty("database")
    private DataSourceFactory database = new DataSourceFactory()

    @Valid
    @JsonProperty("flyway")
    private FlywayFactory flyway = new FlywayFactory()

    @Valid
    @JsonProperty("whoas")
    private WhoasFactory whoasFactory = new WhoasFactory()

    @Valid
    @NotNull
    @JsonProperty
    private String configDirectory = ""

    @Valid
    @NotNull
    @JsonProperty("ldap")
    private auth.LdapConfiguration ldapConfiguration = new auth.LdapConfiguration()

    @JsonProperty
    private ImmutableMap<String, ImmutableMap<String, String>> \
                            viewRendererConfiguration = ImmutableMap.of()
}

