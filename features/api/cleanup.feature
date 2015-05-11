Feature: DeployDB cleanup APIs

  As a DeployDB administrator
  I should be able to delete the artifact, deployment promotion results models from deploydb

  Scenario: The model cleanup shall be successful
    Given there is a deployment
    When I POST to "/tasks/modelCleanup?group=com.example.cucumber&name=cucumber-artifact&version=1.0.1" from the admin app
    Then the response should be 200
    And the response body should be:
    """
    Done!
    """
    And the artifact doesn't exist
