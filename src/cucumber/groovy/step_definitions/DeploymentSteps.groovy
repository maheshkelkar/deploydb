this.metaClass.mixin(cucumber.api.groovy.EN)


import deploydb.dao.ArtifactDAO
import deploydb.dao.DeploymentDAO
import deploydb.dao.FlowDAO
import deploydb.models.Artifact
import deploydb.models.Deployment
import deploydb.models.Flow
import deploydb.models.PromotionResult
import deploydb.Status


Given(~/^there is a deployment$/) { ->
    withSession {

        /**
         * Create sample artifact
         */
        ArtifactDAO adao = new ArtifactDAO(sessionFactory)
        Artifact a1 = sampleArtifact()
        adao.persist(a1)

        /**
         * Create sample promotionResult(s)
         */
        PromotionResult p1 = new PromotionResult("jenkins-smoke", Status.STARTED, null)

        /**
         * Create deployment
         */
        Deployment d1 = new Deployment(a1,
                "pre-prod",
                "faas",
                Status.STARTED)
        d1.addPromotionResult(p1)

        /* Create a flow */
        Flow f = new Flow(a1, "faas")
        f.addDeployment(d1)

        /**
         * Save flow in DB, which will save the deployments & promotionResults as well
         */
        FlowDAO fdao = new FlowDAO(sessionFactory)
        fdao.persist(f)
    }
}

Given(~/^there are deployments$/) { ->
    withSession {

        /**
         * Create sample artifact
         */
        ArtifactDAO adao = new ArtifactDAO(sessionFactory)
        Artifact a1 = sampleArtifact()
        Artifact a2 = sampleArtifactV2()
        adao.persist(a1)
        adao.persist(a2)

        /**
         * Create sample promotionResult(s)
         */
        PromotionResult p1 = new PromotionResult("jenkins-smoke", Status.STARTED, null)
        PromotionResult p2 = new PromotionResult("status-check", Status.STARTED,
                "http://local.lookout.com/jenkins/job-id/2/results")

        /**
         * Create deployment
         */
        Deployment d1 = new Deployment(adao.persist(a1),
                "pre-prod",
                "faas",
                Status.STARTED)
        d1.addPromotionResult(p1)
        Deployment d2 = new Deployment(adao.persist(a2),
                "pre-prod",
                "faas",
                Status.STARTED)
        d2.addPromotionResult(p2)

        /**
         * Save deployment in DB, which will save the promotionResults as well
         */
        DeploymentDAO dao = new DeploymentDAO(sessionFactory)
        dao.persist(d1)
        dao.persist(d2)
    }
}

Given(~/^there are deployments for artifacts$/) { ->
    withSession {

        /**
         * Create sample artifact
         */
        ArtifactDAO adao = new ArtifactDAO(sessionFactory)
        Artifact a1 = sampleArtifact()
        Artifact a2 = sampleArtifactV2()
        adao.persist(a1)
        adao.persist(a2)

        /**
         * Create deployments for artifact a1
         */
        Deployment da11 = new Deployment(adao.persist(a1),
                "dev-integ",
                "faas",
                Status.STARTED)
        Deployment da12 = new Deployment(adao.persist(a1),
                "integ",
                "faas",
                Status.STARTED)
        Deployment da13 = new Deployment(adao.persist(a1),
                "pre-prod",
                "faas",
                Status.STARTED)
        Deployment da14 = new Deployment(adao.persist(a1),
                "prod",
                "faas",
                Status.STARTED)

        /**
         * Create deployment for artifact a2
         */
        Deployment da21 = new Deployment(adao.persist(a2),
                "dev-integ",
                "faas",
                Status.STARTED)
        Deployment da22 = new Deployment(adao.persist(a2),
                "integ",
                "faas",
                Status.STARTED)
        Deployment da23 = new Deployment(adao.persist(a2),
                "pre-prod",
                "faas",
                Status.STARTED)
        Deployment da24 = new Deployment(adao.persist(a2),
                "prod",
                "faas",
                Status.STARTED)

        /**
         * Save deployments in DB
         */
        DeploymentDAO dao = new DeploymentDAO(sessionFactory)
        dao.persist(da11)
        dao.persist(da12)
        dao.persist(da13)
        dao.persist(da14)
        dao.persist(da21)
        dao.persist(da22)
        dao.persist(da23)
        dao.persist(da24)
    }
}
