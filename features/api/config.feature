Feature: DeployDB config APIs

  As a DeployDB administrator
  I should be able to update DeployDB configuration


  Scenario: When the system is idle, reloading the shall succeed

    Given Models configuration directory path is "./example/modelConfig"
    When I POST to "/tasks/configReload" from the admin app
    Then the response should be 200
    And the response body should be:
    """
    Done!
    """


  Scenario: If deployments are in progress, then attempt to reload config should succeed.
            A deployment is considered as in progress (aka NOT verified), if the status
            does not have value of SUCCESS or FAILED

    Given there is a deployment
    And Models configuration directory path is "./example/modelConfig"
    When I POST to "/tasks/configReload" from the admin app
    Then the response should be 200
    And the response body should be:
    """
    Done!
    """


  @freezetime
  Scenario: After config reload, transitions of in-progress deployments should use old config.
            If a deployment is in CREATED state and configuration is reloaded, then
            a deployment update of STARTED state should invoke set of global webhook
            and environment webhook, as specified by the older config
    Given a deployment webhook "started" configuration:
    """
      deployment:
        started:
           - http://localhost:10000/job/old-notify-deployment-started/build
    """
    And an deployment environment webhook "started" configuration named "pre-prod":
    """
    description: "DeployDB Primary Integration"
    webhook:
      deployment:
        started:
          - http://localhost:10000/job/another-old-notify-deployment-started/build
    """
    And there is a deployment in "CREATED" state
    And Models configuration is reloaded from directory path "./example/modelConfig"
    When I PATCH "/api/deployments/1" with:
    """
      {
        "status" : "STARTED"
      }
    """
    Then the webhook 1 should be invoked with the JSON:
    """
      {
        "id" : 1,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "status" : "STARTED",
        "service" : "faas",
        "environment" : "pre-prod",
        "createdAt" : "{{created_timestamp}}"
      }
    """
    And the webhook 2 should be invoked with the JSON:
    """
      {
        "id" : 1,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "status" : "STARTED",
        "service" : "faas",
        "environment" : "pre-prod",
        "createdAt" : "{{created_timestamp}}"
      }
    """


