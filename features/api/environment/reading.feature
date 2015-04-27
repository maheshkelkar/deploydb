Feature: Environment READ APIs

  As a RESTful client or user
  I should be able to read information about environments


  Scenario: Fetching all environments

    Given an environment configuration named "integ":
    """
    description: "DeployDB Primary Integration"
    webhook:
      deployment:
        created:
          - http://jenkins.example.com/job/integ-deploy-created/build
        completed:
          - http://jenkins.example.com/job/integ-deploy-completed/build
    """
    When I GET "/api/environments"
    Then the response should be 200
    And the body should be JSON:
    """
      [{
        "ident" : "integ",
        "description" : "DeployDB Primary Integration",
        "webhook" : {
          "deployment" : {
              "started" : null,
              "created" : ["http://jenkins.example.com/job/integ-deploy-created/build"],
              "completed" : ["http://jenkins.example.com/job/integ-deploy-completed/build"],
              "verified" : null
          },
          "promotion" : null
        }
      }]
    """


  Scenario: Fetching an environment by name that exists

    Given an environment configuration named "integ":
    """
    description: "DeployDB Primary Integration"
    webhook:
      deployment:
        created:
          - http://jenkins.example.com/job/integ-deploy-created/build
        completed:
          - http://jenkins.example.com/job/integ-deploy-completed/build
    """
    When I GET "/api/environments/integ"
    Then the response should be 200
    And the body should be JSON:
    """
      {
        "ident" : "integ",
        "description" : "DeployDB Primary Integration",
        "webhook" : {
          "deployment" : {
              "started" : null,
              "created" : ["http://jenkins.example.com/job/integ-deploy-created/build"],
              "completed" : ["http://jenkins.example.com/job/integ-deploy-completed/build"],
              "verified" : null
          },
          "promotion" : null
        }
      }
    """


  Scenario: Fetching an environment by name that doesn't exist

    When I GET "/api/environments/faas"
    Then the response should be 404


  @freezetime @wip
  Scenario: Fetching all artifacts in the environment

    Given there is a deployment
    When I GET "/api/environments/integ/artifacts"
    Then the response should be 200
    And the body should be JSON:
    """
      [{
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "service" : "faas",
        "status" : "STARTED"
      }]
    """

  @freezetime @wip
  Scenario: Fetching all artifacts in the environment by the pageNumber and perPageSize

    Given there are deployments
    When I GET "/api/environments/integ/artifacts?pageNumber=0&perPageSize=5""
    Then the response should be 200
    And the body should be JSON:
    """
      [{
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "service" : "faas",
        "status" : "STARTED"
      },
      {
        "artifact" : {
          "id" : 2,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.2",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "service" : "faas",
        "status" : "STARTED"
      }]
    """