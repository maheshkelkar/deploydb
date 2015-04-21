package deploydb.auth

import com.google.common.base.Optional
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.NamingEnumeration
import javax.naming.NamingException
import javax.naming.directory.InitialDirContext
import javax.naming.directory.Attributes
import javax.naming.directory.BasicAttribute
import javax.naming.directory.BasicAttributes
import javax.naming.directory.SearchResult
import spock.lang.*

import javax.validation.OverridesAttribute

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
    LdapConfiguration ldapConfiguration

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

    def setup() {
        ldapConfiguration = new LdapConfiguration()
    }

    def "authenticate() - successful authentication"() {
        given:
        /** Define interface objects */
        Set<String> groups = ["Fandango"]
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.close() >> _

        /** Create LdapAuthenticator */
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    buildContext(_) >> context
                    getGroupMemberships(_, _) >> groups
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "foo"
        userOpt.get().groups.size() == 1
        userOpt.get().groups[0] == "Fandango"
    }

    def "authenticate() - when buildContext throws NamingException, then should return failure"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    buildContext(_, _) >> { throw new NamingException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when buildContext throws ConnectException, then should return failure"() {
        given:
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    buildContext(_, _) >> { throw new ConnectException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == false
    }

    def "authenticate() - when getGroupMemberShips throws an exception"() {
        given:
        /** Define interface objects */
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.close() >> _

        /** Create LdapAuthenticator */
        LdapAuthenticator ldapAuthenticator =
                Spy(LdapAuthenticator, constructorArgs: [ldapConfiguration]) {
                    /** Mock interface functions */
                    buildContext(_) >> context
                    getGroupMemberships(_, _) >> { throw new NamingException("test") }
                }

        when:
        Optional<User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == false
    }

    @Ignore
    def "buildContext() - successful authentication"() {
        //TO DO - when LDAP server is available with SPOCK tests
        //when:
        // launch ldap server
        // create dir context and make sure it returns a valid context
        //then:
        //success
    }

    @Ignore
    def "buildContext() - ldap server returns authentication failure"() {
        //TO DO - when LDAP server is available with SPOCK tests
        //when:
        // launch ldap server
        // create dir context and make sure it returns a valid context
        //then:
        // Authentication exception
    }

    def "buildContext() - empty uri causes ConfigurationException to be thrown"() {
        when:
        ldapConfiguration.uri = new URI("")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.buildContext(new BasicCredentials("foo", "bar"))

        then:
        thrown(javax.naming.ConfigurationException)
    }

    def "buildContext() - uri with non-ldap protocol causes NamingException to be thrown"() {
        when:
        ldapConfiguration.uri = new URI("http://localhost:10389")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.buildContext(new BasicCredentials("foo", "bar"))

        then:
        thrown(javax.naming.NamingException)
    }

    def "buildContext() - malformed uri causes NamingException to be thrown"() {
        when:
        ldapConfiguration.uri = new URI("ldap:localhost:10389")
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)
        InitialDirContext context = ldapAuthenticator.buildContext(new BasicCredentials("foo", "bar"))

        then:
        thrown(javax.naming.NamingException)
    }

    def "getGroupMemberships() - successful to retrieve groups"() {
        given:
        ldapConfiguration.groupNameAttribute = "pizza"
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /**
         * Mock the interfaces to return following attributes
         */
        InitialDirContext context = mockGetGroupMembershipInterface("pizza", "Fandango")

        when:
        Set<String> groups = ldapAuthenticator.getGroupMemberships(context, "foo")

        then:
        groups.size() == 1
        groups[0] == "Fandango"
    }

    def "getGroupMemberships() - returns empty SET on groupNameAttribute mismatch"() {
        given:
        ldapConfiguration.groupNameAttribute = "pizza"
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /**
         * Mock the interfaces to return following attributes
         */
        InitialDirContext context = mockGetGroupMembershipInterface("BadPizza", "Fandango")

        when:
        Set<String> groups = ldapAuthenticator.getGroupMemberships(context, "foo")

        then:
        groups.size() == 0
    }

    @Ignore
    def "getGroupMemberships() - returns empty SET on groupClassName fails to match"() {
        //TO DO - when LDAP server is available with SPOCK tests
    }

    def "getGroupMembership() - returns empty SET when context.search() returns are empty"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /**
         * Mock the InitialDirContext to return empty NamingEnumeration
         */
        TestNamingEnumeration<SearchResult> emptyResults = new TestNamingEnumeration<SearchResult>()
        InitialDirContext context = mockInitialDirContext() { return emptyResults }

        when:
        Set<String> groups = ldapAuthenticator.getGroupMemberships(context, "foo")

        then:
        groups.size() == 0
    }

    def "getGroupMembership() - rethrows the NamingException raised by context.search()"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /** Mock InitialDirContext with context.search to throw an exception */
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.search(_, _, _) >> { throw new NamingException() }
        0 * context._

        when:
        Set<String> groups = ldapAuthenticator.getGroupMemberships(context, "foo")

        then:
        thrown(NamingException)
    }

    def "getGroupMembership() - rethrows the NamingException raised by results.hasMore()"() {
        given:
        LdapAuthenticator ldapAuthenticator = new LdapAuthenticator(ldapConfiguration)

        /* Naming Enumeration Mocking */
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)
        1 * results.hasMore() >> { throw new NamingException() }
        1 * results.close()
        0 * results._

        /** Mock InitialDirContext to return "results"*/
        InitialDirContext context = mockInitialDirContext() { return results }

        when:
        Set<String> groups = ldapAuthenticator.getGroupMemberships(context, "foo")

        then:
        thrown(NamingException)
    }

    /* Class Helpers */

    /** Mock InitialDirContext */
    InitialDirContext mockInitialDirContext(Closure closure) {
        InitialDirContext context = Mock(InitialDirContext)
        1 * context.search(_, _, _) >> closure.call()
        0 * context._
        return context
    }

    /* Populate SearchResult */
    SearchResult populateSearchResult(String attribType, String attribValue) {
        Attributes matchAttrs = new BasicAttributes(true)
        matchAttrs.put(new BasicAttribute(attribType, attribValue))
        return new SearchResult("faux_name", null, matchAttrs)
    }

    /** Mock TestNamingEnumeration for 1 walk through the while loop */
    TestNamingEnumeration<SearchResult> mockResultsWalkOneLoop(Closure closure) {
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)
        1 * results.hasMore() >> true
        1 * results.hasMore() >> false
        1 * results.close()
        1 * results.next() >> closure.call()
        0 * results._

        return results
    }

    /** Mocking all interfaces of getGroupMemberships() */
    InitialDirContext mockGetGroupMembershipInterface(String attribType, String attribValue) {
        /** Populate SearchResult */
        SearchResult result = populateSearchResult(attribType, attribValue)

        /** Mock NamingEnumeration to walk through while loop once and return "result" */
        TestNamingEnumeration<SearchResult> results = mockResultsWalkOneLoop() { return result }

        /** Mock InitialDirContext to return "results"*/
        InitialDirContext context = mockInitialDirContext() { return results }

        return context
    }
}