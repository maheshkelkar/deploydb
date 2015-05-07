package deploydb


class ModelConfigHelper {
    String baseCfgDirName = "./build/tmp/config"

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

    def createEnvironmentWebhookConfigFile(String fileContents, String name) {
        /* Create temp file */
        File environmentsDir = new File("${baseCfgDirName}/environments")
        if (!environmentsDir.exists()) {
            environmentsDir.mkdirs()
        }

        File environmentFile = new File(environmentsDir, "${name}.yml")
        environmentFile.write(fileContents)
    }

    def createBasicWebhookConfigFile(String fileContents) {
        /* Create temp file */
        File webhookDir = new File("${baseCfgDirName}/webhook")
        if (!webhookDir.exists()) {
            webhookDir.mkdirs()
        }

        File webhookFile = new File(webhookDir, "basicWebhook.yml")
        webhookFile.write(fileContents)
    }

    def createPromotionConfigFile() {
        String fileContents = """
type:  deploydb.models.promotion.BasicPromotionImpl
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

    def createManualPromotionConfigFile() {
        String fileContents = """
type:  deploydb.models.promotion.ManualLDAPPromotionImpl
description: "Manual LDAP Promotion"
attributes:
    allowedGroup: ManualPromotionGroup
"""
        /* Create temp file */
        File promotionsDir = new File("${baseCfgDirName}/promotions")
        if (!promotionsDir.exists()) {
            promotionsDir.mkdirs()
        }

        File promotionFile = new File(promotionsDir, "manualPromo.yml")
        promotionFile.write(fileContents)
    }

    def createEnvironmentConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    created:
      - http://localhost:10000/job/basicEnv-deploy-created/build
    completed:
      - http://localhost:10000/job/basicEnv-deploy-completed/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createEnvironmentNoWebhooksConfigFile() {
        String fileContents = """
description: "Basic Environment"
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
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

    def createWebhookConfigFile() {
        String fileContents = """
deployment:
  created:
     - http://localhost:10000/job/notify-deployment-created/build
  started:
     - http://localhost:10000/job/notify-deployment-started/build
  completed:
     - http://localhost:10000/job/notify-deployment-completed/build
promotion:
  completed:
     - http://localhost:10000/job/notify-promotion-completed/build
"""
        createBasicWebhookConfigFile(fileContents)
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

    def createProdEnvironmentConfigFile() {
        String fileContents = """
description: "Production Environment"
webhook:
  deployment:
    created:
      - http://localhost:10000/job/prodEnv-deploy-created/build
    completed:
      - http://localhost:10000/job/prodEnv-deploy-completed/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "prodEnv")
    }

    def createBasicProdPipelineConfigFile() {
        String fileContents = """
description: "Basic pipeline"
environments:
     basicEnv:
       promotions:
          - basicPromo
     prodEnv:
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

    def createMultiPromoServiceConfigFile() {
        String fileContents = """
description: "Basic Service"
artifacts:
  - basic.group.1:bg1
  - basic.group.2:bg2
pipelines:
  - basicPipe
promotions:
  - basicPromo
  - manualPromo
"""
        /* Create temp file */
        File servicesDir = new File("${baseCfgDirName}/services")
        if (!servicesDir.exists()) {
            servicesDir.mkdirs()
        }

        File serviceFile = new File(servicesDir, "basicServ.yml")
        serviceFile.write(fileContents)
    }

    def createServicePromotionPipelineModelsConfigFiles() {
        createPromotionConfigFile()
        createPipelineConfigFile()
        createServiceConfigFile()
    }

    def createBasicProdServicePromotionPipelineModelsConfigFiles() {
        createEnvironmentConfigFile()
        createProdEnvironmentConfigFile()
        createPromotionConfigFile()
        createBasicProdPipelineConfigFile()
        createServiceConfigFile()
    }


}

class WebhooksModelConfigHelper extends deploydb.ModelConfigHelper {


    def createMultipleWebhooksConfigFile() {
        String fileContents = """
deployment:
  created:
     - http://localhost:10000/job/notify-deployment-created-1/build
     - http://localhost:10000/job/notify-deployment-created-2/build
  started:
     - http://localhost:10000/job/notify-deployment-started-1/build
     - http://localhost:10000/job/notify-deployment-started-2/build
  completed:
     - http://localhost:10000/job/notify-deployment-completed-1/build
     - http://localhost:10000/job/notify-deployment-completed-2/build
promotion:
  completed:
     - http://localhost:10000/job/notify-promotion-completed-1/build
     - http://localhost:10000/job/notify-promotion-completed-2/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createMultipleWebhooksEnvironmentConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    created:
      - http://localhost:10000/job/basicEnv-deploy-created-1/build
      - http://localhost:10000/job/basicEnv-deploy-created-2/build
    completed:
      - http://localhost:10000/job/basicEnv-deploy-completed/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createDeploymentStartedWebhookConfigFile() {
        String fileContents = """
deployment:
  started:
     - http://localhost:10000/job/notify-deployment-started/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createDeploymentStartedEnvironmentWebhookConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    started:
      - http://localhost:10000/job/basicEnv-deploy-started/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createMultipleDeploymentStartedWebhooksConfigFile() {
        String fileContents = """
deployment:
  started:
     - http://localhost:10000/job/notify-deployment-started-1/build
     - http://localhost:10000/job/notify-deployment-started-2/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createMultipleDeploymentStartedEnvironmentWebhooksConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    started:
      - http://localhost:10000/job/basicEnv-deploy-started-1/build
      - http://localhost:10000/job/basicEnv-deploy-started-2/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createDeploymentCompletedWebhookConfigFile() {
        String fileContents = """
deployment:
  completed:
     - http://localhost:10000/job/notify-deployment-completed/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createDeploymentCompletedEnvironmentWebhookConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    completed:
      - http://localhost:10000/job/basicEnv-deploy-completed/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createMultipleDeploymentCompletedWebhooksConfigFile() {
        String fileContents = """
deployment:
  completed:
     - http://localhost:10000/job/notify-deployment-completed-1/build
     - http://localhost:10000/job/notify-deployment-completed-2/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createMultipleDeploymentCompletedEnvironmentWebhooksConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  deployment:
    completed:
      - http://localhost:10000/job/basicEnv-deploy-completed-1/build
      - http://localhost:10000/job/basicEnv-deploy-completed-2/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createPromotionCompletedWebhookConfigFile() {
        String fileContents = """
promotion:
  completed:
     - http://localhost:10000/job/notify-promotion-completed/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createPromotionCompletedEnvironmentWebhookConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  promotion:
    completed:
      - http://localhost:10000/job/basicEnv-promotion-completed/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }

    def createMultiplePromotionCompletedWebhookConfigFile() {
        String fileContents = """
promotion:
  completed:
     - http://localhost:10000/job/notify-promotion-completed-1/build
     - http://localhost:10000/job/notify-promotion-completed-2/build
"""
        createBasicWebhookConfigFile(fileContents)
    }

    def createMultiplePromotionCompletedEnvironmentWebhookConfigFile() {
        String fileContents = """
description: "Basic Environment"
webhook:
  promotion:
    completed:
      - http://localhost:10000/job/basicEnv-promotion-completed-1/build
      - http://localhost:10000/job/basicEnv-promotion-completed-2/build
"""
        createEnvironmentWebhookConfigFile(fileContents, "basicEnv")
    }
}