package deploydb

import com.google.common.base.Optional
import io.dropwizard.auth.basic.BasicCredentials
import javax.naming.AuthenticationException
import javax.naming.Context
import javax.naming.NamingEnumeration
import javax.naming.NamingException
import javax.naming.directory.InitialDirContext
import javax.naming.directory.Attributes
import javax.naming.directory.BasicAttribute
import javax.naming.directory.BasicAttributes
import javax.naming.directory.SearchControls
import javax.naming.directory.SearchResult
import spock.lang.*

import javax.validation.OverridesAttribute

class LdapAuthenticatorSpec extends Specification {

    def "ensure it can be instantiated"() {
        when:
        def ldapConfiguration = new auth.LdapConfiguration()
        def ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)

        then:
        ldapAuthenticator instanceof auth.LdapAuthenticator
    }
}

class LdapAuthenticatorWithArgsSpec extends Specification {

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

    def "Successful authentication and getGroupMembership"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)

        /* Cookup SearchResult */
        Attributes matchAttrs = new BasicAttributes(true);
        matchAttrs.put(new BasicAttribute("cn", "Fandango"));
        def result = new SearchResult("fauxname", null, matchAttrs)

        /* Context calls mocking */
        1 * context.search(_, _, _) >> results
        1 * context.close() >> _
        0 * context._

        /* buildContext partial mocking */
        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        /* Naming Enumeration Mocking */
        1 * results.hasMore() >> true
        1 * results.hasMore() >> false
        1 * results.close()
        1 * results.next() >> result
        0 * results._

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "foo"
        userOpt.get().groups.size() == 1
        userOpt.get().groups[0] == "Fandango"
    }

    def "Unsuccessful authentication case, logs the exception"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)

        /* buildContext partial mocking */
        ldapAuthenticator.metaClass.buildContext = { String username, String pass ->
            throw new AuthenticationException()
        }

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == false
    }

    def "getGroupMembership fails in attribute match, groups SET is empty"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)

        /* Cookup SearchResult */
        Attributes matchAttrs = new BasicAttributes(true);
        matchAttrs.put(new BasicAttribute("app", "Fandango")); /* Does not match groupNameAtribute */
        def result = new SearchResult("fauxname", null, matchAttrs)

        /* Context calls mocking */
        1 * context.search(_, _, _) >> results
        1 * context.close() >> _
        0 * context._

        /* buildContext partial mocking */
        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        /* Naming Enumeration Mocking */
        1 * results.hasMore() >> true
        1 * results.hasMore() >> false
        1 * results.close()
        1 * results.next() >> result
        0 * results._

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "foo"
        userOpt.get().groups.isEmpty() == true
    }

    def "getGroupMembership returns empty SearchResult, groups SET is empty"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)

        /* Context call mocking */
        1 * context.search(_, _, _) >> new TestNamingEnumeration()
        1 * context.close() >> _
        0 * context._

        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "foo"
        userOpt.get().groups.isEmpty() == true
    }

    def "getGroupMembership returns empty SearchResult, groups SET is empty"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)

        /* Context call mocking */
        1 * context.search(_, _, _) >> new TestNamingEnumeration()
        1 * context.close() >> _
        0 * context._

        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        userOpt.isPresent() == true
        userOpt.get().name == "foo"
        userOpt.get().groups.isEmpty() == true
    }

    def "context.search() throws NamingException, in turn authenticate raise AuthenticationException"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)

        /* Context calls mocking */
        1 * context.search(_, _, _) >> { throw new NamingException() }
        1 * context.close() >> _
        0 * context._

        /* buildContext partial mocking */
        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        thrown(io.dropwizard.auth.AuthenticationException)
    }

    def "results.hasMore() throws NamingException, in turn authenticate raise AuthenticationException"() {
        given:
        def ldapConfiguration = new auth.LdapConfiguration()
        auth.LdapAuthenticator ldapAuthenticator = new auth.LdapAuthenticator(ldapConfiguration)
        def context = Mock(InitialDirContext)
        TestNamingEnumeration<SearchResult> results = Mock(TestNamingEnumeration)

        /* Cookup SearchResult */
        Attributes matchAttrs = new BasicAttributes(true);
        matchAttrs.put(new BasicAttribute("cn", "Fandango"));
        def result = new SearchResult("fauxname", null, matchAttrs)

        /* Context calls mocking */
        1 * context.search(_, _, _) >> results
        1 * context.close() >> _
        0 * context._

        /* buildContext partial mocking */
        ldapAuthenticator.metaClass.buildContext = { String username, String pass -> return context }

        /* Naming Enumeration Mocking */
        1 * results.hasMore() >> { throw new NamingException() }
        1 * results.close()
        0 * results._

        when:
        Optional<auth.User> userOpt = ldapAuthenticator.authenticate(new BasicCredentials("foo", "bar"))

        then:
        thrown(io.dropwizard.auth.AuthenticationException)
    }
}