package deploydb.auth

import com.google.common.base.Optional
import groovy.transform.TypeChecked
import io.dropwizard.auth.Authenticator
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.Context
import javax.naming.AuthenticationException
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
     * Handling the referral:
     *
     * When you search in AD, if AD thinks there are more information
     * available in another place, it returns a referral (place to find more info)
     * along with your search results. You could avoid this exception by setting
     * Context.REFERRAL to follow. Then it would search in the referral also
     * (That's why it takes more time to return result).
     */
    static final String referralAction = "follow"

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
     * @throws AuthenticationException is bind credentials are invalid
     */
    protected InitialDirContext bindContext()
            throws NamingException, ConnectException, AuthenticationException {

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
         * Set referral action (See above for details)
         */
        env.put(Context.REFERRAL, referralAction)

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
        env.put(Context.SECURITY_AUTHENTICATION, "simple")
        env.put(Context.SECURITY_PRINCIPAL, configuration.bindDN)
        env.put(Context.SECURITY_CREDENTIALS, configuration.bindPassword)

        /** Create a context instance and initiate a connection to LDAP server */
        return new InitialDirContext(env)
    }

    /**
     * Search context for this criteria and return the sanitized attribute values
     * for the attributeName
     * @param context
     * @param name
     * @param filter
     * @param attributeName
     * @return
     * @throws NamingException
     */
    protected Set<String> searchContext(InitialDirContext context, String name,
                                        String filter, String attributeName)
            throws NamingException {
        /**
         * Optimize the output search results to single attribute only
         */
        SearchControls searchCtls = new SearchControls()
        searchCtls.setSearchScope(SearchControls.SUBTREE_SCOPE)
        String[] returnedAtts = [attributeName] as String[]
        searchCtls.setReturningAttributes(returnedAtts)

        /** Search for attribute with name, filter & controls */
        final NamingEnumeration<SearchResult> results = context.search(
                name, filter, searchCtls)

        /** Walk and prepare the response */
        Set<String> attribValues = new HashSet<>()
        try {
            while (results.hasMore()) {
                SearchResult current = results.next()

                /** Get the specified attribute's value */
                if (current.getAttributes() != null &&
                        current.getAttributes().get(attributeName) != null) {
                    String attribute = (String) current.getAttributes().get(attributeName).get(0)
                    attribValues.add(attribute)
                }
            }
        } finally {
            results.close()
        }
        return attribValues
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
    protected Set<String> getGroupMemberships(InitialDirContext context, String userDN)
            throws NamingException {

        /**
         * We are searching from the top i.e. baseDC; filter for the groups that username
         * belong to and has the given group's ObjectClass
         */
        final String filter = String.format("(&(%s=%s)(objectClass=%s))",
                configuration.groupMembershipPrefix, userDN,
                configuration.groupObjectClass)

        /** Search from baseDC */
        return searchContext(context, configuration.baseDC, filter, configuration.groupNamePrefix)
    }

    /**
     * Get user attributes and match the password
     *
     * The configuration attributes used in here are guaranteed to be non-null by annotation.
     * If those parameters are mis-configured, then search query would fail

     * @param context
     * @param credentials
     * @return true on success
     * @throws NamingException if naming exception is encountered by underlying JNDI
     * @throws AuthenticationException is user credentials are invalid
     */
    protected String authenticateUser(InitialDirContext context, BasicCredentials credentials)
            throws NamingException, AuthenticationException {

        InitialDirContext userContext = null
        try {

            /**
             * Find User DN
             *
             * In order to authenticate, we should bind (again) to AD with credentials. But,
             * to do so we need fully qualified user distinguished name (DN). We cannot
             * construct it based on available information.
             */

            /**
             * We are searching from the top i.e. baseDC; filter the output using username and
             * ObjectClass that user belong to
             */
            final String filter = String.format("(&(%s=%s)(objectClass=%s))",
                    configuration.userNamePrefix, credentials.username,
                    configuration.userObjectClass)

            /** Search from baseDC */
            Set<String> distinguishedNames = searchContext(context, configuration.baseDC,
                    filter, configuration.distinguishedNamePrefix)

            /**
             * The search should yield us 1 user DN. If we received anything but that, then
             * raise an exception
             */
            if (distinguishedNames.size() != 1) {
                throw new Exception("failed to find User DN for ${credentials.username}")
            }
            String userDN = distinguishedNames[0]

            /* Using environment attributes from the existing context and authenticate the user */
            Hashtable env = context.getEnvironment()
            Hashtable environment = (Hashtable)env.clone()
            environment.put(Context.SECURITY_AUTHENTICATION, "simple")
            environment.put(Context.SECURITY_PRINCIPAL, userDN)
            environment.put(Context.SECURITY_CREDENTIALS, credentials.password)
            userContext = new InitialDirContext(environment)

            /** Return authenticated user distinguished name */
            return userDN
        } finally {
            if (userContext) {
                userContext.close()
            }
        }
    }

    /**
     * Authenticate the user and return the groups associated with it.
     *
     * If there are no groups, user is still considered as authenticated,
     * but is not associated with any groups.
     *
     * Logs all the authentication or naming exceptions and returns failure
     *
     * Authentication is a 4 step process
     * 1. Create a context (A) using bind credentials
     * 2. Search userDN with the context (A) and username
     * 3. Rebind or create a new context (B) using userDN and password
     * 4. Search groups with context (A) and userDN
     *
     * @param credentials
     * @return User - Optional User class
     */
    @Override
    Optional<User> authenticate(BasicCredentials credentials) {
        InitialDirContext context = null
        try {
            /** Bind */
            context = bindContext()

            /** Authenticate */
            String userDN = authenticateUser(context, credentials)

            /** Get a list of groups that this user is authorized for */
            Set<String> groupMemberships = getGroupMemberships(context, userDN)

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
