package deploydb.models

import deploydb.ModelLoader
import deploydb.registry.ModelRegistry
import io.dropwizard.configuration.ConfigurationParsingException
import spock.lang.Ignore
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

    @Ignore
    def "Loading of valid basic promotion config content succeeds"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.Promotion.BasicPromotion
description: Basic Promotion Smoke Test
""")
        promotion.ident = "basic"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.ident == "basic"
        promotion.type == 'deploydb.models.Promotion.BasicPromotion'
        promotion.description == "Basic Promotion Smoke Test"
        //promotion.attributes.size() == 0
        promotionRegistry.get("basic") == promotion
        promotionRegistry.getAll()== [promotion]
        //User user = new User("foo", new HashSet())
        //promotion.validate(user) == true
    }

    @Ignore
    def "Loading Manual ldap promotion config where validation succeeds"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.Promotion.ManualLDAPPromotion
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
""")
        promotion.ident = "manualldap"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.ident == "manualldap"
        promotion.type == 'deploydb.models.Promotion.ManualLDAPPromotion'
        promotion.description == "Manual LDAP Promotion Smoke Test"
        //promotion.attributes.size() == 1
        //promotion.attributes["allowedGroup"] == "fooGroup"
        promotionRegistry.get("manualldap") == promotion
        promotionRegistry.getAll()== [promotion]
        //User user = new User("foo", [ "fooGroup" ] as Set)
        //promotion.validate(user) == true
    }

    @Ignore
    def "Loading Manual ldap promotion config where validation fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.Promotion.ManualLDAPPromotion
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
""")
        promotion.ident = "manualldap"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.ident == "manualldap"
        promotion.type == 'deploydb.models.Promotion.ManualLDAPPromotion'
        promotion.description == "Manual LDAP Promotion Smoke Test"
        //promotion.attributes.size() == 1
        //promotion.attributes["allowedGroup"] == "fooGroup"
        promotionRegistry.get("manualldap") == promotion
        promotionRegistry.getAll()== [promotion]
        //User user = new User("foo", [ "barGroup" ] as Set)
        //promotion.validate(user) == false
    }

    @Ignore
    def "Loading Manual ldap promotion config without allowedGroup, where validation fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.Promotion.ManualLDAPPromotion
description: Manual LDAP Promotion Smoke Test
""")
        promotion.ident = "manualldap"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.ident == "manualldap"
        promotion.type == 'deploydb.models.Promotion.ManualLDAPPromotion'
        promotion.description == "Manual LDAP Promotion Smoke Test"
        //promotion.attributes.size() == 0
        promotionRegistry.get("manualldap") == promotion
        promotionRegistry.getAll()== [promotion]
        //User user = new User("foo", [ "fooGroup" ] as Set)
        //promotion.validate(user) == false
    }

    @Ignore
    def "Loading Manual ldap promotion config with multiple allowedGroup fails"() {
        given:
        Promotion promotion = promotionLoader.loadFromString("""
type: deploydb.models.Promotion.ManualLDAPPromotion
description: Manual LDAP Promotion Smoke Test
attributes:
  allowedGroup : "fooGroup"
  allowedGroup : "barGroup"
""")
        promotion.ident = "manualldap"
        promotionRegistry.put(promotion.ident, promotion)

        expect:
        promotion.ident == "manualldap"
        promotion.type == 'deploydb.models.Promotion.ManualLDAPPromotion'
        promotion.description == "Manual LDAP Promotion Smoke Test"
        //promotion.attributes.size() == 1
        //promotion.attributes["allowedGroup"] == "barGroup"
        promotionRegistry.get("manualldap") == promotion
        promotionRegistry.getAll()== [promotion]
        //User user = new User("foo", [ "fooGroup" ] as Set)
        //promotion.validate(user) == false
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

    def "Loading a empty model promotion config succeeds"(){
        given:
        Promotion promotion = promotionLoader.loadFromString("type:\n"+
                  "description:\n")

        expect:
        promotion.type == ""
        promotion.description == ""
    }

}
