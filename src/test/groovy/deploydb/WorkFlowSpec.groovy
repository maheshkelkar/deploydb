package deploydb

import deploydb.dao.FlowDAO
import deploydb.dao.ModelConfigDAO
import deploydb.models.Flow
import spock.lang.*

class WorkFlowSpec extends Specification {

    def "ensure it can be instantiated"() {
        when:
        def app = new DeployDBApp()
        def workFlow = new WorkFlow(app)

        then:
        workFlow instanceof WorkFlow
    }
}

class workFlowWithArgsSpec extends Specification {
    private ModelConfigHelper modelConfigHelper = new ModelConfigHelper()
    private DeployDBApp app = new DeployDBApp()
    private WorkFlow workFlow
    private FlowDAO fdao = Mock(FlowDAO)
    private ModelConfigDAO mdao = Mock(ModelConfigDAO)

    def setup() {
        modelConfigHelper.setup()
        app.configDirectory = modelConfigHelper.baseCfgDirName
        app.configChecksum = null
        workFlow = new WorkFlow(app)
        workFlow.initializeRegistry()
        workFlow.flowDAO = fdao
        workFlow.modelConfigDAO = mdao
    }

    def cleanup() {
        modelConfigHelper.cleanup()
    }

    def "Load entire config from a directory and make sure it passes"() {
        given:
        modelConfigHelper.createPromotionConfigFile()
        modelConfigHelper.createEnvironmentConfigFile()
        modelConfigHelper.createPipelineConfigFile()
        modelConfigHelper.createServiceConfigFile()
        modelConfigHelper.createWebhookConfigFile()
        workFlow.loadConfigModels()
        mdao.persist(_) >> _

        expect:
        workFlow.promotionRegistry.getAll().size() == 1
        workFlow.promotionRegistry.get("basicPromo").ident == "basicPromo"
        workFlow.environmentRegistry.getAll().size() == 1
        workFlow.environmentRegistry.get("basicEnv").ident == "basicEnv"
        workFlow.pipelineRegistry.getAll().size() == 1
        workFlow.pipelineRegistry.get("basicPipe").ident == "basicPipe"
        workFlow.serviceRegistry.getAll().size() == 1
        workFlow.serviceRegistry.get("basicServ").ident == "basicServ"
        workFlow.globalWebhook != null
    }

    def "If promotion is missing, then loading pipeline in loadConfigModels throws an exception"() {
        when:
        modelConfigHelper.createEnvironmentConfigFile()
        modelConfigHelper.createPipelineConfigFile()
        workFlow.loadConfigModels()
        mdao.persist(_) >> _

        then:
        thrown(IllegalArgumentException)
    }

    def "If environment is missing, then loading pipeline in loadConfigModels throws an exception"() {
        when:
        modelConfigHelper.createPromotionConfigFile()
        modelConfigHelper.createPipelineConfigFile()
        workFlow.loadConfigModels()
        mdao.persist(_) >> _

        then:
        thrown(IllegalArgumentException)
    }

    def "If pipeline is missing, then loading service in loadConfigModels throws an exception"() {
        when:
        modelConfigHelper.createPromotionConfigFile()
        modelConfigHelper.createEnvironmentConfigFile()
        modelConfigHelper.createServiceConfigFile()
        workFlow.loadConfigModels()
        mdao.persist(_) >> _

        then:
        thrown(IllegalArgumentException)
    }


    def "Reload unchanged config from a directory and make sure its ignored"() {
        given:
        modelConfigHelper.createPromotionConfigFile()
        modelConfigHelper.createEnvironmentConfigFile()
        modelConfigHelper.createPipelineConfigFile()
        modelConfigHelper.createServiceConfigFile()
        modelConfigHelper.createWebhookConfigFile()
        workFlow.loadConfigModels()
        String oldChecksum = app.configChecksum
        mdao.persist(_) >> _

        when:
        workFlow.loadConfigModels()

        then:
        app.configChecksum != null
        oldChecksum == app.configChecksum
    }

    def "Reload changed config from a directory and make sure it passes"() {
        given:
        modelConfigHelper.createPromotionConfigFile()
        modelConfigHelper.createEnvironmentConfigFile()
        modelConfigHelper.createPipelineConfigFile()
        modelConfigHelper.createServiceConfigFile()
        modelConfigHelper.createWebhookConfigFile()
        workFlow.loadConfigModels()
        String oldChecksum = app.configChecksum
        modelConfigHelper.createAnotherPromotionConfigFile()
        mdao.persist(_) >> _

        when:
        workFlow.loadConfigModels()

        then:
        app.configChecksum != null
        oldChecksum != app.configChecksum
    }
}