Feature: Promotion Result APIs

  As a RESTful client or user
  I should be able to add Promotion result for a Deployment in the system


  @freezetime
  Scenario: Adding a result for a Promotion associated with a Deployment

    Given promotions are configured
    And there is a deployment
    When I POST to "/api/deployments/1/promotions" with:
    """
      {
        "name"  : "jenkins-smoke",
        "status" : "SUCCESS",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results"
      }
    """
    Then the response should be 201
    And the body should be JSON:
    """
      {
        "id" : 1,
        "promotion" : "jenkins-smoke",
        "status" : "SUCCESS",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results",
        "createdAt" : "{{created_timestamp}}"
      }
    """


  @freezetime @wip
  Scenario: (issue 166) Adding a result for a Manual LDAP Promotion associated with a Deployment succeeds

    Given a manual LDAP promotion is configured
    And there is a deployment with manual LDAP promotion
    When I POST to "/api/deployments/1/promotions" with credentials "peter:griffin" and:
    """
      {
        "name"  : "manual-promotion",
        "status" : "SUCCESS"
      }
    """
    Then the response should be 201
    And the body should be JSON:
    """
      {
        "id" : 1,
        "promotion" : "manual-promotion",
        "status" : "SUCCESS",
        "infoUrl" : null,
        "createdAt" : "{{created_timestamp}}"
      }
    """


  Scenario: Adding a result with invalid status for a Promotion associated with a Deployment

    Given there is a deployment
    And promotions are configured
    When I POST to "/api/deployments/1/promotions" with:
    """
      {
        "name"  : "jenkins-smoke",
        "status" : "CREATED",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results"
      }
    """
    Then the response should be 406


  Scenario: Adding Promotion result for a Deployment that doesn't exist

    When I POST to "/api/deployments/1/promotions" with:
    """
      {
        "name"  : "jenkins-smoke",
        "status" : "SUCCESS",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results"
      }
    """
    Then the response should be 404


  @error
  Scenario: Adding a result for a Promotion which is not associated with the Deployment

    When I POST to "/api/deployments/1/promotions" with:
    """
      {
        "name"  : "test-smoke",
        "status" : "FAILED",
        "infoUrl" : "http://local.lookout.com/jenkins/job-id/2/results"
      }
    """
    Then the response should be 404
