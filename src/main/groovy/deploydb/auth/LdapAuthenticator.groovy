package deploydb.auth

import com.google.common.base.Optional
import groovy.transform.TypeChecked
import io.dropwizard.auth.Authenticator
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.Context
import javax.naming.NamingEnumeration
import javax.naming.NamingException
import javax.naming.directory.InitialDirContext
import javax.naming.directory.SearchControls
import javax.naming.directory.SearchResult
import javax.validation.constraints.NotNull
import org.slf4j.Logger
import org.slf4j.LoggerFactory


@TypeChecked
class LdapAuthenticator implements Authenticator<BasicCredentials, BasicCredentials> {
    @NotNull
    private final LdapConfiguration configuration
    private static final Logger logger = LoggerFactory.getLogger(LdapAuthenticator.class)

    /**
     * The fully qualified class name of the factory class that will create
     * an initial context.
     */
    static final String contextFactoryClassName = "com.sun.jndi.ldap.LdapCtxFactory"

    /**
     * The constant holds the name of property for specifying connect timeout
     */
    static final String connectTimeoutName = "com.sun.jndi.ldap.connect.timeout"

    /**
     * The constant holds the name of property for specifying read timeout
     */
    static final String readTimeoutName = "com.sun.jndi.ldap.read.timeout"

    /**
     * The constant holds the name of property for specifying connect pool
     */
    static final String connectPoolName = "com.sun.jndi.ldap.connect.pool"
    static final String connectPoolTimeoutName = "com.sun.jndi.ldap.connect.pool.timeout"
    static final String connectPoolTimeoutValue = "5000" /* in milliseconds */

    /**
     *  Constructor for LdapAuthenticator
     *
     * @param configuration - MUST be non null
     */
    LdapAuthenticator(LdapConfiguration configuration) {
        this.configuration = configuration
    }

    /**
     * Creates, connects to LDAP server using JNDI
     *
     * @param credentials
     * @return Directory context
     * @throws NamingException if naming exception is encountered by underlying JNDI
     * @throws ConnectException if uri is invalid
     */
    protected InitialDirContext buildContext(BasicCredentials credentials)
            throws NamingException, ConnectException {

        final String userDN = String.format("%s=%s,%s", configuration.userNameAttribute,
                credentials.username, configuration.userFilter)
        final Hashtable<String, String> env = new Hashtable<>()

        /**
         * Constant that holds the name of the environment property
         * for specifying the initial context factory to use. The value
         * of the property should be the fully qualified class name
         * of the factory class that will create an initial context.
         */
        env.put(Context.INITIAL_CONTEXT_FACTORY, contextFactoryClassName)

        /**
         * URI of the LDAP server.
         *
         * In case of invalid URI or if connection fails to establish, then this
         * function will throw a ConnectException.
         */
        env.put(Context.PROVIDER_URL, configuration.uri.toString())

        /**
         * If cannot establish a connection within a certain timeout period,
         * it aborts the connection attempt.
         *
         * By default, this timeout period is the network (TCP) timeout value,
         * which is in the order of a few minutes.
         */
        env.put(connectTimeoutName,
                String.valueOf(configuration.connectTimeout.toMilliseconds()))

        /**
         * If the LDAP provider doesn't get an LDAP response within the specified
         * readTimeout period, this setting aborts the read attempt.
         *
         * If this property is not specified, the default is to wait for the response
         * until it is received.
         */
        env.put(readTimeoutName,
                String.valueOf(configuration.readTimeout.toMilliseconds()))

        /**
         * Use connection pooling by using the environment property
         */
        env.put(connectPoolName, "true")

        /**
         * Set the pool timeout, so that the LDAP provider will automatically close and
         * remove pooled connections that have been idle for more than the specified period.
         */
        env.put(connectPoolTimeoutName, connectPoolTimeoutValue)

        /** User specific attributes */
        env.put(Context.SECURITY_PRINCIPAL, userDN)
        env.put(Context.SECURITY_CREDENTIALS, credentials.password)

        /** Create a context instance and initiate a connection to LDAP server */
        return new InitialDirContext(env)
    }

    /**
     * Search authorized groups for this user
     *
     * The configuration attributes used in here are guaranteed to be non-null by annotation.
     * If those parameters are mis-configured, then search query would fail
     *
     * @param context
     * @param username
     * @return Set of groupNames
     */
    protected Set<String> getGroupMemberships(InitialDirContext context, String username)
            throws NamingException {

        /**
         * Filter the user groups for configured groupClass (aka objectClass)
         *
         * Details about filter format can be found here:
         * <http://docstore.mik.ua/orelly/java-ent/jenut/ch06_12.htm>
         *
         * E.g. (&(memberUid=myusername)(objectClass=groupOfUniqueNames))
         * - Filter the groups where myusername is member AND objectClass is groupOfUniqueNames
         */
        final String filter = String.format("(&(%s=%s)(objectClass=%s))",
                configuration.groupMembershipAttribute, username,
                configuration.groupClassName)

        /**
         * Optimize the output search results to single groupNameAttribute only
         */
        SearchControls searchCtls = new SearchControls()
        String[] returnedAtts = [configuration.groupNameAttribute] as String[]
        searchCtls.setReturningAttributes(returnedAtts)

        /** Search for group with groupFilter string, filter & controls */
        final NamingEnumeration<SearchResult> results = context.search(
                configuration.groupFilter, filter, searchCtls)

        /** Walk and prepare the response */
        Set<String> groups = new HashSet<>()
        try {
            while (results.hasMore()) {
                SearchResult current = results.next()
                if (current.getAttributes() != null &&
                        current.getAttributes().get(configuration.groupNameAttribute) != null) {
                    String group = (String) current.getAttributes().get(configuration.groupNameAttribute).get(0)
                    groups.add(group)
                }
            }
        } finally {
            results.close()
        }
        return groups
    }

    /**
     * Authenticate the user and return the groups associated with it.
     *
     * If there are no groups, user is still considered as authenticated,
     * but is not associated with any groups.
     *
     * Logs all the authentication or naming exceptions and return authentication
     * failure
     *
     * @param credentials
     * @return User - Optional User class
     */
    @Override
    Optional<User> authenticate(BasicCredentials credentials) {
        InitialDirContext context = null
        try {
            /** Authenticate */
            context = buildContext(credentials)

            /** Get a list of groups that this user is authorized for */
            Set<String> groupMemberships = getGroupMemberships(context, credentials.username)
            return Optional.of(new User(credentials.username, groupMemberships))

        } catch (Exception err) {
            logger.error("${credentials.username} failed to authenticate with an Exception: ${err.getMessage()}")
        } finally {
            if (context) {
                context.close()
            }
        }
        return Optional.absent()
    }
}
