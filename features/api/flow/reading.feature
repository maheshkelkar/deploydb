Feature: Flow READ APIs

  As a RESTful client or user
  I should be able to read information about flows


  @freezetime
  Scenario: Fetching a Flow by ID

    Given there is a flow
    When I GET "/api/flows/1"
    Then the response should be 200
    And the body should be JSON:
    """
    {
      "id" : 1,
      "createdAt" : "{{created_timestamp}}",
      "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
      "deployments":[{
        "id" : 1,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "pre-production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      },
      {
        "id" : 2,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      }],
      "service":"faas"
    }
    """

  Scenario: Fetching a Flow by ID that doesn't exist

    When I GET "/api/flows/1"
    Then the response should be 404


  @freezetime
  Scenario: Fetching all flows

    Given there is a flow
    When I GET "/api/flows"
    Then the response should be 200
    And the body should be JSON:
    """
    [{
      "id" : 1,
      "createdAt" : "{{created_timestamp}}",
      "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
      "deployments":[{
        "id" : 1,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "pre-production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      },
      {
        "id" : 2,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      }],
      "service":"faas"
    }]
    """

  @freezetime
  Scenario: Fetching an flow by the pageNumber and perPageSize

    Given there are flows
    When I GET "/api/flows?pageNumber=0&perPageSize=5"
    Then the response should be 200
    And the body should be JSON:
    """
    [{
      "id" : 1,
      "createdAt" : "{{created_timestamp}}",
      "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
      "deployments":[{
        "id" : 1,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "pre-production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      },
      {
        "id" : 2,
        "artifact" : {
          "id" : 1,
          "group" : "com.example.cucumber",
          "name" : "cucumber-artifact",
          "version" : "1.0.1",
          "sourceUrl" : "http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar",
          "createdAt" : "{{created_timestamp}}"
        },
        "environment" : "production",
        "service" : "faas",
        "promotions":[],
        "status" : "STARTED",
        "createdAt" : "{{created_timestamp}}"
      }],
      "service":"faas"
    }]
    """

