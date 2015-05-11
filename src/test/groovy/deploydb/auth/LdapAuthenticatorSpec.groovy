package deploydb.auth

import com.google.common.base.Optional
import deploydb.IntegrationTestAppHelper
import deploydb.ModelConfigHelper
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.AuthenticationException
import javax.naming.NamingEnumeration
import javax.naming.NamingException
import javax.naming.PartialResultException
import javax.naming.directory.InitialDirContext
import javax.naming.directory.SearchResult
import spock.lang.*


class LdapAuthenticatorSpec extends Specification {

    def "ensure it can be instantiated"() {
        when:
        def ldapConfiguration = new LdapConfiguration()
        def ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        then:
        ldapAuthenticator instanceof LdapAuthenticator
    }
}

class LdapAuthenticatorWithArgsSpec extends Specification {
    private IntegrationTestAppHelper integAppHelper = new IntegrationTestAppHelper()
    private ModelConfigHelper mcfgHelper = new ModelConfigHelper()
    LdapConfiguration ldapConfiguration

    def setup() {
        mcfgHelper.setup()
        integAppHelper.startAppWithConfiguration('deploydb.spock.yml')
        integAppHelper.runner.getApplication().configuration.configDirectory = mcfgHelper.baseCfgDirName
        ldapConfiguration = integAppHelper.runner.getApplication().configuration.ldapConfiguration
    }

    def cleanup() {
        integAppHelper.stopApp()
        mcfgHelper.cleanup()
    }

    class TestNamingEnumeration<SearchResult> extends NamingEnumeration {
        @Override
        SearchResult next() throws NamingException { return null }
        @Override
        boolean hasMore() throws NamingException { return false }
        @Override
        void close() throws NamingException { }
        @Override
        boolean hasMoreElements() { return false }
        @Override
        SearchResult nextElement() { throw new NoSuchElementException() }
    }

    def "authenticate() - real successful authentication"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "peter"
        userOpt.get().groups.size() == 2
        userOpt.get().groups.contains("fox")
        userOpt.get().groups.contains("familyguy")
    }

    def "authenticate() - when bindContext throws NamingException, then should return failure"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    bindContext() >> { throw new NamingException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when bindContext throws ConnectException, then should return failure"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    bindContext() >> { throw new ConnectException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when bindContext throws AuthenticationException, then should return failure"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    bindContext() >> { throw new AuthenticationException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when authenticateUser throws an exception"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    authenticateUser(_, _) >> { throw new NamingException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when getGroupMemberShips throws an exception"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    getGroupMemberships(_, _) >> { throw new NamingException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("peter", "griffin"))

        then:
        userOpt.isPresent() == false
    }

    def "bindContext() - successful authentication"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        when:
        InitialDirContext context = ldapAuthenticator.bindContext()

        then:
        context != null
    }

    def "bindContext() - authentication failure raise AuthenticationException"() {
        given:
        ldapConfiguration.bindPassword = "fake"
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        when:
        ldapAuthenticator.bindContext()

        then:
        thrown (javax.naming.AuthenticationException)
    }

    def "bindContext() - empty uri causes ConfigurationException to be thrown"() {
        given:
        ldapConfiguration.uri = new URI("")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        when:
        ldapAuthenticator.bindContext()

        then:
        thrown(javax.naming.ConfigurationException)
    }

    def "bindContext() - uri with non-ldap protocol causes NamingException to be thrown"() {
        given:
        ldapConfiguration.uri = new URI("http://localhost:10389")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        when:
        ldapAuthenticator.bindContext()

        then:
        thrown(javax.naming.NamingException)
    }

    def "bindContext() - malformed uri causes NamingException to be thrown"() {
        when:
        ldapConfiguration.uri = new URI("ldap:localhost:10389")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        ldapAuthenticator.bindContext()

        then:
        thrown(javax.naming.NamingException)
    }

    def "searchContext() - successful to retrieve attributes"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.bindContext()

        when:
        Set<String> attributes = ldapAuthenticator.searchContext(
                context, ldapConfiguration.baseDC,
                ldapAuthenticator.formatUserFilterString("peter"),
                ldapConfiguration.distinguishedNamePrefix)

        then:
        attributes.size() == 1
        attributes[0] == "cn=peter griffin,ou=people,dc=example,dc=com"
    }

    def "searchContext() - returns empty SET on filter fails to match"() {
        given:
        ldapConfiguration.distinguishedNamePrefix = "invalidDN"
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.bindContext()

        when:
        Set<String> attributes = ldapAuthenticator.searchContext(
                context, ldapConfiguration.baseDC,
                ldapAuthenticator.formatUserFilterString("peter"),
                ldapConfiguration.distinguishedNamePrefix)

        then:
        attributes.size() == 0
    }

    def "searchContext() - returns empty SET when context.search() returns are empty"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /**
         * Mock the InitialDirContext to return empty NamingEnumeration
         */
        TestNamingEnumeration<SearchResult> emptyResults = new TestNamingEnumeration<SearchResult>()
        InitialDirContext context = mockInitialDirContext() { return emptyResults }

        when:
        Set<String> attributes = ldapAuthenticator.searchContext(
                context,"dc=example,dc=com", "(cn=foo)", "pizza")

        then:
        attributes.size() == 0
    }

    def "searchContext() - rethrows the NamingException raised by context.search()"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /** Mock InitialDirContext with context.search to throw an exception */
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.search(_, _, _) >> { throw new NamingException() }
        0 * context._

        when:
        ldapAuthenticator.searchContext(context,"dc=example,dc=com", "(cn=foo)", "pizza")

        then:
        thrown(NamingException)
    }

    def "searchContext() - rethrows the NamingException raised by results.hasMore()"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /* Naming Enumeration Mocking */
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)
        1 * results.hasMore() >> { throw new NamingException() }
        1 * results.close()
        0 * results._

        /** Mock InitialDirContext to return "results" */
        InitialDirContext context = mockInitialDirContext() { return results }

        when:
        ldapAuthenticator.searchContext(context,"dc=example,dc=com", "(cn=foo)", "pizza")

        then:
        thrown(NamingException)
    }

    def "searchContext() - handles the PartialResultException raised by results.hasMore()"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /* Naming Enumeration Mocking */
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)
        1 * results.hasMore() >> { throw new PartialResultException() }
        1 * results.close()
        0 * results._

        /** Mock InitialDirContext to return "results" */
        InitialDirContext context = mockInitialDirContext() { return results }

        when:
        Set<String> attributes = ldapAuthenticator.searchContext(
                context,"dc=example,dc=com", "(cn=foo)", "pizza")

        then:
        attributes.size() == 0
    }


    def "authenticateUser() - successful user authentication"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.bindContext()

        when:
        String userDN = ldapAuthenticator.authenticateUser(context, new BasicCredentials("peter", "griffin"))

        then:
        userDN == "cn=peter griffin,ou=people,dc=example,dc=com"
    }

    def "authenticateUser() - invalid credentials throw AuthenticationException"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.bindContext()

        when:
        String userDN = ldapAuthenticator.authenticateUser(context, new BasicCredentials("peter", "simpson"))

        then:
        thrown(javax.naming.AuthenticationException)
    }

    /* Class Helpers */

    /** Mock InitialDirContext */
    private InitialDirContext mockInitialDirContext(Closure closure) {
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.search(_, _, _) >> closure.call()
        0 * context._
        return context
    }
}