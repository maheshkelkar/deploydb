package deploydb.models.promotion

import deploydb.ModelLoader
import deploydb.auth.User
import deploydb.registry.ModelRegistry
import io.dropwizard.configuration.ConfigurationParsingException
import io.dropwizard.configuration.ConfigurationValidationException
import spock.lang.Specification


class PromotionSpec extends Specification {
    def "ensure Promotion object can be instantiated"() {
        when:
        def promotion = new Promotion()

        then:
        promotion instanceof Promotion
    }
}

class PromotionWithArgsSpec extends Specification {
    private final ModelRegistry<Promotion> promotionRegistry =
            new ModelRegistry<Promotion>()
    private final ModelLoader<Promotion> promotionLoader =
            new ModelLoader<Promotion>(Promotion.class)

    def "Loading of valid basic promotion config content succeeds"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.BasicPromotionImpl
description: Basic Promotion Smoke Test
""")
        promotion.ident = "basic"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.type == 'deploydb.models.promotion.BasicPromotionImpl'
        promotion.description == "Basic Promotion Smoke Test"
        promotion.attributes == null
        promotionRegistry.get("basic") == promotion
        promotionRegistry.getAll()== [promotion]
        User user = new User("foo", new HashSet())
        promotion.validate(user) == true
    }

    def "When allowedGroup matches with User authorized groups, then validation succeeds"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
""")
        promotion.ident = "manualldap"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.description == "Manual LDAP Promotion Smoke Test"
        promotion.attributes.size() == 1
        promotion.attributes["allowedGroup"] == "fooGroup"
        promotionRegistry.get("manualldap") == promotion
        promotionRegistry.getAll()== [promotion]
        User user = new User("foo", [ "fooGroup" ] as Set)
        promotion.validate(user) == true
    }


    def "When allowedGroup is NOT part of User authorized groups, then validation fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
""")
        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.attributes.size() == 1
        promotion.attributes["allowedGroup"] == "fooGroup"
        User user = new User("foo", [ "barGroup" ] as Set)
        promotion.validate(user) == false
    }


    def "When no allowedGroup is configured, then validation fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
""")
        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.attributes == null
        User user = new User("foo", [ "fooGroup" ] as Set)
        promotion.validate(user) == false
    }


    def "If multiple allowedGroup(s) are configured, last entry superscedes and validation fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
  allowedGroup : "barGroup"
""")
        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.attributes.size() == 1
        promotion.attributes["allowedGroup"] == "barGroup"
        User user = new User("foo", [ "fooGroup" ] as Set)
        promotion.validate(user) == false
    }


    def "The allowedGroup is configured, but authentication is not, hence validate fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
""")
        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.attributes.size() == 1
        promotion.attributes["allowedGroup"] == "fooGroup"
        User user = null
        promotion.validate(user) == false
    }


    def "Neither allowedGroup, nor authentication is configured, hence validate fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.ManualLDAPPromotionImpl
description: Manual LDAP Promotion Smoke Test
""")
        expect:
        promotion.type == 'deploydb.models.promotion.ManualLDAPPromotionImpl'
        promotion.attributes == null
        User user = null
        promotion.validate(user) == false
    }

    def "Loading of empty model promotion throws a parsing exception"(){
        when:
        Promotion promotion = promotionLoader.loadFromString("")

        then:
        thrown(ConfigurationParsingException)
    }

    def "Loading a malformed promotion throws a parsing exception"(){
        when:
        Promotion promotion = promotionLoader.loadFromString("type")

        then:
        thrown(ConfigurationParsingException)
    }

    def "Loading a empty model promotion config throws validation exception"(){
        when:
        Promotion promotion = promotionLoader.loadFromString("type:\n"+
                  "description:\n")

        then:
        thrown(ConfigurationValidationException)
    }

    def "Loading a promotion config with invalid classname throws a validation exception"() {
        when:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.invalid.promotion.classname.BasicPromotionImpl
description: Basic Promotion Smoke Test
""")
        then:
        thrown(ConfigurationValidationException)
    }

    def "Loading a promotion config with invalid derivation throws a validation exception"() {
        when:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.promotion.Promotion
description: Basic Promotion Smoke Test
""")
        then:
        thrown(ConfigurationValidationException)
    }
}
