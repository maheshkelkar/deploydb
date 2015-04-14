package deploydb.auth

import com.google.common.base.Optional
import com.google.common.collect.ImmutableSet
import io.dropwizard.auth.AuthenticationException
import io.dropwizard.auth.Authenticator
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.AuthenticationException
import javax.naming.Context
import javax.naming.NamingEnumeration
import javax.naming.NamingException
import javax.naming.directory.InitialDirContext
import javax.naming.directory.SearchControls
import javax.naming.directory.SearchResult
import org.slf4j.Logger
import org.slf4j.LoggerFactory


class LdapAuthenticator implements Authenticator<BasicCredentials, BasicCredentials> {
    private final LdapConfiguration configuration
    private static final Logger logger = LoggerFactory.getLogger(LdapAuthenticator.class)

    LdapAuthenticator(LdapConfiguration configuration) {
        this.configuration = configuration
    }

    /* Take off everything but alphanumeric and some username specific chars */
    private static String sanitizeEntity(String name) {
        return name.replaceAll("[^A-Za-z0-9-_.]", "")
    }

    /**
     * Creates, connects to LDAP server using JNDI
     *
     * @param sanitizedUsername
     * @param password
     * @return Directory context
     * @throws NamingException
     */
    InitialDirContext buildContext(String sanitizedUsername, String password) throws NamingException {
        final String userDN = String.format("%s=%s,%s", configuration.getUserNameAttribute(),
                sanitizedUsername, configuration.getUserFilter())
        final Hashtable<String, String> env = new Hashtable<>()

        /** Common attributes */
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory")
        env.put(Context.PROVIDER_URL, configuration.getUri().toString())
        env.put("com.sun.jndi.ldap.connect.timeout",
                String.valueOf(configuration.getConnectTimeout().toMilliseconds()))
        env.put("com.sun.jndi.ldap.read.timeout",
                String.valueOf(configuration.getReadTimeout().toMilliseconds()))
        env.put("com.sun.jndi.ldap.connect.pool", "true")

        /** User specific attributes */
        env.put(Context.SECURITY_PRINCIPAL, userDN)
        env.put(Context.SECURITY_CREDENTIALS, password)

        return new InitialDirContext(env)
    }

    /**
     * Search authorized groups for this user
     *
     * @param context
     * @param userName
     * @return Set of groupNames
     */
    private Set<String> getGroupMemberships(InitialDirContext context, String userName) {

        /** Filter the user groups for configured groupClass (aka objectClass) */
        final String filter = String.format("(&(%s=%s)(objectClass=%s))",
                configuration.getGroupMembershipAttribute(), userName,
                configuration.getGroupClassName(        ))

        /** Limit the search results to groupNameAttribute only */
        SearchControls searchCtls = new SearchControls();
        def returnedAtts = [configuration.getGroupNameAttribute()] as String[]
        searchCtls.setReturningAttributes(returnedAtts);

        /** Search for group with filter & controls */
        final NamingEnumeration<SearchResult> results = context.search(
                configuration.getGroupFilter(), filter, searchCtls)

        /** Walk and prepare the response */
        ImmutableSet.Builder<String> overlappingGroups = ImmutableSet.builder()
        try {
            while (results.hasMore()) {
                SearchResult current = results.next()
                if (current.getAttributes() != null &&
                        current.getAttributes().get(configuration.getGroupNameAttribute()) != null) {
                    String group = (String) current.getAttributes().get(configuration.getGroupNameAttribute()).get(0)
                    overlappingGroups.add(group)
                }
            }
            return overlappingGroups.build()
        } finally {
            results.close()
        }
    }

    /**
     * Authenticate the user and return the groups associated with it.
     *
     * If there are no groups, user is still considered as authenticated, but with no groups.
     *
     * @param credentials
     * @return User class
     * @throws io.dropwizard.auth.AuthenticationException
     */
    @Override
    Optional<User> authenticate(BasicCredentials credentials) throws AuthenticationException {
        String pass = credentials.getPassword()

        final String sanitizedUsername = sanitizeEntity(credentials.getUsername())
        InitialDirContext context = null
        try {
            /** Authenticate */
            context = buildContext(sanitizedUsername, credentials.getPassword())

            /** Get a list of groups that this user is authorized for */
            Set<String> groupMemberships = getGroupMemberships(context, sanitizedUsername)
            return Optional.of(new User(sanitizedUsername, groupMemberships))
        } catch (AuthenticationException ae) {
            logger.error("${sanitizedUsername} failed to authenticate: ", ae)
        } catch (NamingException err) {
            throw new io.dropwizard.auth.AuthenticationException(
                    "LDAP Authentication failure (username: ${sanitizedUsername})", err)
        } finally {
            if (context) {
                context.close()
            }
        }
        return Optional.absent()
    }
}
