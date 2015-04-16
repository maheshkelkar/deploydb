package deploydb


class ModelConfigHelper {
    private String baseCfgDirName = "./build/tmp/config"

    def setup() {
        File baseCfgDir = new File(baseCfgDirName)
        if (baseCfgDir.exists()) {
            baseCfgDir.deleteDir()
        }
    }

    def cleanup() {
        File baseCfgDir = new File(baseCfgDirName)
        if (baseCfgDir.exists()) {
            baseCfgDir.deleteDir()
        }
    }

    def createPromotionConfigFile() {
        String fileContents = """
type:  BasicPromotion
description: "Basic Smoke test for the Basic Service"
"""
        /* Create temp file */
        File promotionsDir = new File("${baseCfgDirName}/promotions")
        if (!promotionsDir.exists()) {
            promotionsDir.mkdirs()
        }

        File promotionFile = new File(promotionsDir, "basicPromo.yml")
        promotionFile.write(fileContents)
    }

    def createAnotherPromotionConfigFile() {
        String fileContents = """
type:  AdvancedPromotion
description: "Advanced Smoke test for the Basic Service"
"""
        /* Create temp file */
        File promotionsDir = new File("${baseCfgDirName}/promotions")
        if (!promotionsDir.exists()) {
            promotionsDir.mkdirs()
        }

        File promotionFile = new File(promotionsDir, "advancedPromo.yml")
        promotionFile.write(fileContents)
    }

    def createEnvironmentConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    created:
      - http://jenkins.example.com/job/basicEnv-deploy-created/build
    completed:
      - http://jenkins.example.com/job/basicEnv-deploy-completed/build
"""
        /* Create temp file */
        File environmentsDir = new File("${baseCfgDirName}/environments")
        if (!environmentsDir.exists()) {
            environmentsDir.mkdirs()
        }

        File environmentFile = new File(environmentsDir, "basicEnv.yml")
        environmentFile.write(fileContents)
    }

    def createEnvironmentNoWebhooksConfigFile() {
        String fileContents = """
description: "Basic Environment"
"""
        /* Create temp file */
        File environmentsDir = new File("${baseCfgDirName}/environments")
        if (!environmentsDir.exists()) {
            environmentsDir.mkdirs()
        }

        File environmentFile = new File(environmentsDir, "basicEnv.yml")
        environmentFile.write(fileContents)
    }


    def createPipelineConfigFile() {
        String fileContents = """
description: "Basic pipeline"
environments:
     basicEnv:
       promotions:
          - basicPromo
"""
        /* Create temp file */
        File pipelinesDir = new File("${baseCfgDirName}/pipelines")
        if (!pipelinesDir.exists()) {
            pipelinesDir.mkdirs()
        }

        File pipelineFile = new File(pipelinesDir, "basicPipe.yml")
        pipelineFile.write(fileContents)
    }

    def createServiceConfigFile() {
        String fileContents = """
description: "Basic Service"
artifacts:
  - basic.group.1:bg1
  - basic.group.2:bg2
pipelines:
  - basicPipe
promotions:
  - basicPromo
"""
        /* Create temp file */
        File servicesDir = new File("${baseCfgDirName}/services")
        if (!servicesDir.exists()) {
            servicesDir.mkdirs()
        }

        File serviceFile = new File(servicesDir, "basicServ.yml")
        serviceFile.write(fileContents)
    }

    def createWebhookConfigFile() {
        String fileContents = """
deployment:
  created:
     - http://localhost:10000/job/notify-deployment-created/build
  started:
     - http://localhost:10000/job/notify-deployment-started/build
  completed:
     - http://localhost:10000/job/notify-deployment-completed1/build
     - http://localhost:10000/job/notify-deployment-completed2/build
promotion:
  completed:
     - http://localhost:10000/job/notify-promotion-completed/build
"""
        /* Create temp file */
        File webhookDir = new File("${baseCfgDirName}/webhook")
        if (!webhookDir.exists()) {
            webhookDir.mkdirs()
        }

        File webhookFile = new File(webhookDir, "basicWebhook.yml")
        webhookFile.write(fileContents)
    }

    def createModelsConfigFiles() {
        createPromotionConfigFile()
        createEnvironmentNoWebhooksConfigFile()
        createPipelineConfigFile()
        createServiceConfigFile()
        createWebhookConfigFile()
    }
}
