$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "id": "artifact-create-apis",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "name": "Artifact CREATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4301897000,
  "status": "passed"
});
formatter.before({
  "duration": 3256000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "\nThe creation of an artifact requires group, name, version and sourceUrl.",
  "name": "Creating a new artifact",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 16,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 17,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 26,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 27,
    "content_type": ""
  }
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 90104000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 4246000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 4683000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 2778000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 677806000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 4832000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 60184000,
  "status": "passed"
});
formatter.after({
  "duration": 41537000,
  "status": "passed"
});
formatter.after({
  "duration": 525000,
  "status": "passed"
});
formatter.before({
  "duration": 844655000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 39
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a group name",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 42,
  "doc_string": {
    "value": "  {\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 43,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 50
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 80311000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 127000,
  "status": "passed"
});
formatter.after({
  "duration": 20591000,
  "status": "passed"
});
formatter.before({
  "duration": 883322000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 53
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a name",
  "keyword": "Scenario",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 56,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 57,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 64
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 53222000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.after({
  "duration": 21187000,
  "status": "passed"
});
formatter.before({
  "duration": 739323000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 67
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a version",
  "keyword": "Scenario",
  "line": 68,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 70,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 71,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 78
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 47109000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 14162000,
  "status": "passed"
});
formatter.before({
  "duration": 528275000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 81
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a sourceUrl",
  "keyword": "Scenario",
  "line": 82,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 84,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }",
    "line": 85,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 92
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 33481000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.after({
  "duration": 12571000,
  "status": "passed"
});
formatter.before({
  "duration": 501792000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 95
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a group name",
  "keyword": "Scenario",
  "line": 96,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 98
});
formatter.step({
  "name": "the group is over 8192 characters",
  "keyword": "And ",
  "line": 99
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 100
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 101
});
formatter.match({
  "location": "ArtifactSteps.groovy:24"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "group",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 18
    }
  ],
  "location": "ArtifactSteps.groovy:27"
});
formatter.result({
  "duration": 1433000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:55"
});
formatter.result({
  "duration": 25204000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 12483000,
  "status": "passed"
});
formatter.before({
  "duration": 485395000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 104
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a name",
  "keyword": "Scenario",
  "line": 105,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 107
});
formatter.step({
  "name": "the name is over 8192 characters",
  "keyword": "And ",
  "line": 108
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 110
});
formatter.match({
  "location": "ArtifactSteps.groovy:24"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 17
    }
  ],
  "location": "ArtifactSteps.groovy:27"
});
formatter.result({
  "duration": 682000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:55"
});
formatter.result({
  "duration": 32481000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 195000,
  "status": "passed"
});
formatter.after({
  "duration": 14460000,
  "status": "passed"
});
formatter.before({
  "duration": 483706000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 113
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a version",
  "keyword": "Scenario",
  "line": 114,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 116
});
formatter.step({
  "name": "the version is over 255 characters",
  "keyword": "And ",
  "line": 117
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 118
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 119
});
formatter.match({
  "location": "ArtifactSteps.groovy:24"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "version",
      "offset": 4
    },
    {
      "val": "255",
      "offset": 20
    }
  ],
  "location": "ArtifactSteps.groovy:27"
});
formatter.result({
  "duration": 361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:55"
});
formatter.result({
  "duration": 27622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.after({
  "duration": 12125000,
  "status": "passed"
});
formatter.before({
  "duration": 507538000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 122
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a sourceUrl",
  "keyword": "Scenario",
  "line": 123,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 125
});
formatter.step({
  "name": "the sourceUrl is over 8192 characters",
  "keyword": "And ",
  "line": 126
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 127
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 128
});
formatter.match({
  "location": "ArtifactSteps.groovy:24"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourceUrl",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 22
    }
  ],
  "location": "ArtifactSteps.groovy:27"
});
formatter.result({
  "duration": 644000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:55"
});
formatter.result({
  "duration": 23002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 11205000,
  "status": "passed"
});
formatter.before({
  "duration": 432702000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-promotion-fails",
  "tags": [
    {
      "name": "@error",
      "line": 131
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing promotion fails",
  "keyword": "Scenario",
  "line": 132,
  "type": "scenario"
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "Given ",
  "line": 134
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 135
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 136
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 137,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 138,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 146
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 336000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 206000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 36231000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 23427000,
  "status": "passed"
});
formatter.before({
  "duration": 419363000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-environment-fails",
  "tags": [
    {
      "name": "@error",
      "line": 149
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing environment fails",
  "keyword": "Scenario",
  "line": 150,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 152
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 153
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 154
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 155,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 156,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 164
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 1013000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 262000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 302000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 27275000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 14981000,
  "status": "passed"
});
formatter.before({
  "duration": 362185000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-pipeline-fails",
  "tags": [
    {
      "name": "@error",
      "line": 167
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing pipeline fails",
  "keyword": "Scenario",
  "line": 168,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 170
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 171
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 172
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 173,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 174,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 182
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 373000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 265000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 28558000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 10059000,
  "status": "passed"
});
formatter.before({
  "duration": 436253000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-service-fails",
  "tags": [
    {
      "name": "@error",
      "line": 185
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing service fails",
  "keyword": "Scenario",
  "line": 186,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 189
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 190
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 191
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 192,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 193,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 201
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 215000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 277000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 29865000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 11592000,
  "status": "passed"
});
formatter.before({
  "duration": 414542000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-existing-artifact-should-fail",
  "tags": [
    {
      "name": "@error",
      "line": 203
    }
  ],
  "description": "",
  "name": "Creating an existing artifact should fail",
  "keyword": "Scenario",
  "line": 204,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 206
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 207,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }",
    "line": 208,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 409",
  "keyword": "Then ",
  "line": 216
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 4468000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 31924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "409",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.after({
  "duration": 10457000,
  "status": "passed"
});
formatter.uri("api/artifact/deleting.feature");
formatter.feature({
  "id": "artifact-delete-apis",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to delete artifacts",
  "name": "Artifact DELETE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 477807000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-delete-apis;attempting-to-delete-an-artifact",
  "description": "\nOnce artifacts are in DeployDB they\u0027re there forever. FOREVER.",
  "name": "Attempting to delete an artifact",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I DELETE \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "the response should be 405",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 2803000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:22"
});
formatter.result({
  "duration": 19122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.after({
  "duration": 10136000,
  "status": "passed"
});
formatter.uri("api/artifact/reading.feature");
formatter.feature({
  "id": "artifact-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about artifacts",
  "name": "Artifact READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 382114000,
  "status": "passed"
});
formatter.before({
  "duration": 108000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-exists",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching an artifact by ID that exists",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3882000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 34498000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 524000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1166000,
  "status": "passed"
});
formatter.after({
  "duration": 11443000,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 396493000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-with-an-invalid-content-type",
  "tags": [
    {
      "name": "@error",
      "line": 38
    }
  ],
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "name": "Fetching an artifact with an invalid content type",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 45
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\" with custom headers:",
  "keyword": "When ",
  "line": 46,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 47
    },
    {
      "cells": [
        "Accept",
        "application/xml"
      ],
      "line": 48
    }
  ]
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 49
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 4494000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:67"
});
formatter.result({
  "duration": 28013000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 164000,
  "status": "passed"
});
formatter.after({
  "duration": 10549000,
  "status": "passed"
});
formatter.before({
  "duration": 386887000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an artifact by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 53
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 54
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20378000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 110000,
  "status": "passed"
});
formatter.after({
  "duration": 10696000,
  "status": "passed"
});
formatter.before({
  "duration": 391527000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-a-non-numeric-id",
  "tags": [
    {
      "name": "@error",
      "line": 56
    }
  ],
  "description": "",
  "name": "Fetching an artifact by a non-numeric ID",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/0xdeadbeef\"",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 60
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20423000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.after({
  "duration": 9220000,
  "status": "passed"
});
formatter.before({
  "duration": 406539000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple",
  "tags": [
    {
      "name": "@freezetime",
      "line": 63
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 66
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 68
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 69,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 2763000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 31555000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 3643000,
  "status": "passed"
});
formatter.after({
  "duration": 13487000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 406936000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 81
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 82,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 84
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 85
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 86
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 87,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 88,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 7091000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 31061000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1806000,
  "status": "passed"
});
formatter.after({
  "duration": 10863000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 440337000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 106
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 107,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 110
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18879000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 8864000,
  "status": "passed"
});
formatter.before({
  "duration": 350105000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-page-number",
  "tags": [
    {
      "name": "@error",
      "line": 112
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid page number",
  "keyword": "Scenario",
  "line": 113,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 115
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 116
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18661000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 8139000,
  "status": "passed"
});
formatter.before({
  "duration": 351528000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-data-type-for-pagesize",
  "tags": [
    {
      "name": "@error",
      "line": 118
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid data type for pageSize",
  "keyword": "Scenario",
  "line": 119,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When ",
  "line": 121
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 122
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 17965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.after({
  "duration": 8448000,
  "status": "passed"
});
formatter.before({
  "duration": 356735000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber\u003d0-and-perpagesize\u003d0",
  "tags": [
    {
      "name": "@error",
      "line": 124
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber\u003d0 and perPageSize\u003d0",
  "keyword": "Scenario",
  "line": 125,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 127
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d0\"",
  "keyword": "When ",
  "line": 128
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 129
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 4136000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 17677000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.after({
  "duration": 8962000,
  "status": "passed"
});
formatter.before({
  "duration": 341272000,
  "status": "passed"
});
formatter.before({
  "duration": 61000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple",
  "tags": [
    {
      "name": "@freezetime",
      "line": 132
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple",
  "keyword": "Scenario",
  "line": 133,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 135
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 136
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 137
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 138,
  "doc_string": {
    "value": " {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  } ",
    "line": 139,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 2763000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 22124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 867000,
  "status": "passed"
});
formatter.after({
  "duration": 8420000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 359542000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple-when-multiple-artifacts-are-present",
  "tags": [
    {
      "name": "@freezetime",
      "line": 150
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple when multiple artifacts are present",
  "keyword": "Scenario",
  "line": 151,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 153
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 154
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 155
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 156,
  "doc_string": {
    "value": " {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }",
    "line": 157,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 4903000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 19607000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 918000,
  "status": "passed"
});
formatter.after({
  "duration": 8129000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 516216000,
  "status": "passed"
});
formatter.before({
  "duration": 77000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-version-query",
  "tags": [
    {
      "name": "@query",
      "line": 168
    },
    {
      "name": "@freezetime",
      "line": 168
    }
  ],
  "description": "",
  "name": "Fetching an artifact by version query",
  "keyword": "Scenario",
  "line": 169,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 171
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0.1\"",
  "keyword": "When ",
  "line": 172
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 173
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 174,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 175,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 4412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0.1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 24527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 919000,
  "status": "passed"
});
formatter.after({
  "duration": 8893000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 360346000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-version-query",
  "tags": [
    {
      "name": "@query",
      "line": 186
    },
    {
      "name": "@freezetime",
      "line": 186
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial version query",
  "keyword": "Scenario",
  "line": 187,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 189
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0\"",
  "keyword": "When ",
  "line": 190
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 191
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 192,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 193,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 4193000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20340000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1159000,
  "status": "passed"
});
formatter.after({
  "duration": 9097000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 364741000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-name-query",
  "tags": [
    {
      "name": "@query",
      "line": 212
    },
    {
      "name": "@freezetime",
      "line": 212
    }
  ],
  "description": "",
  "name": "Fetching an artifact by name query",
  "keyword": "Scenario",
  "line": 213,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 215
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcucumber-artifact\"",
  "keyword": "When ",
  "line": 216
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 217
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 218,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 219,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 3604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 19095000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1033000,
  "status": "passed"
});
formatter.after({
  "duration": 9762000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 331804000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-name-query",
  "tags": [
    {
      "name": "@query",
      "line": 239
    },
    {
      "name": "@freezetime",
      "line": 239
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial name query",
  "keyword": "Scenario",
  "line": 240,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 242
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcucumber\"",
  "keyword": "When ",
  "line": 243
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 244
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 245,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 246,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 3393000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1129000,
  "status": "passed"
});
formatter.after({
  "duration": 7682000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 323793000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-group-query",
  "tags": [
    {
      "name": "@query",
      "line": 266
    },
    {
      "name": "@freezetime",
      "line": 266
    }
  ],
  "description": "",
  "name": "Fetching an artifact by group query",
  "keyword": "Scenario",
  "line": 267,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 269
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcom.example.cucumber\"",
  "keyword": "When ",
  "line": 270
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 271
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 272,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 273,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 4099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcom.example.cucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1217000,
  "status": "passed"
});
formatter.after({
  "duration": 8709000,
  "status": "passed"
});
formatter.after({
  "duration": 63000,
  "status": "passed"
});
formatter.before({
  "duration": 339798000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-group-query",
  "tags": [
    {
      "name": "@query",
      "line": 293
    },
    {
      "name": "@freezetime",
      "line": 293
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial group query",
  "keyword": "Scenario",
  "line": 294,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 296
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dexample\"",
  "keyword": "When ",
  "line": 297
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 298
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 299,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 300,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 3678000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dexample",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18532000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1069000,
  "status": "passed"
});
formatter.after({
  "duration": 8379000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 335561000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-version-query-and-pagination-parameters",
  "tags": [
    {
      "name": "@query",
      "line": 319
    },
    {
      "name": "@freezetime",
      "line": 319
    }
  ],
  "description": "",
  "name": "Fetching an artifact by version query and pagination parameters",
  "keyword": "Scenario",
  "line": 320,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 322
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0\u0026pageNumber\u003d0\u0026perPageSize\u003d3\"",
  "keyword": "When ",
  "line": 323
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 324
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 325,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 326,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:14"
});
formatter.result({
  "duration": 3837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0\u0026pageNumber\u003d0\u0026perPageSize\u003d3",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 17046000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1047000,
  "status": "passed"
});
formatter.after({
  "duration": 8194000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.uri("api/artifact/updating.feature");
formatter.feature({
  "id": "artifact-update-apis",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to update artifacts",
  "name": "Artifact UPDATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 351186000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-update-apis;attempting-to-update-an-artifact",
  "description": "\nArtifacts must be considered immutable to ensure consistency of data from\nDeployDB. We can\u0027t different binaries with the same version, that\u0027s silly.",
  "name": "Attempting to update an artifact",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "I PATCH \"/api/artifacts/1\" with:",
  "keyword": "When ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"version\" : \"9.0.0.0\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 405",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 2463000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 14146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 7879000,
  "status": "passed"
});
formatter.uri("api/cleanup.feature");
formatter.feature({
  "id": "deploydb-cleanup-apis",
  "description": "\nAs a DeployDB administrator\nI should be able to delete the artifact, deployment promotion results models from deploydb",
  "name": "DeployDB cleanup APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 333175000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-cleanup-apis;the-model-cleanup-shall-be-successful",
  "description": "",
  "name": "The model cleanup shall be successful",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I POST to \"/tasks/modelCleanup?group\u003dcom.example.cucumber\u0026name\u003dcucumber-artifact\u0026version\u003d1.0.1\" from the admin app",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 10,
  "doc_string": {
    "value": "Done!",
    "line": 11,
    "content_type": ""
  }
});
formatter.step({
  "name": "the artifact doesn\u0027t exist",
  "keyword": "And ",
  "line": 14
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 6431000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/modelCleanup?group\u003dcom.example.cucumber\u0026name\u003dcucumber-artifact\u0026version\u003d1.0.1",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:59"
});
formatter.result({
  "duration": 44698000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 910000,
  "status": "passed"
});
formatter.match({
  "location": "ArtifactSteps.groovy:46"
});
formatter.result({
  "duration": 1310000,
  "status": "passed"
});
formatter.after({
  "duration": 8547000,
  "status": "passed"
});
formatter.uri("api/config.feature");
formatter.feature({
  "id": "deploydb-config-apis",
  "description": "\nAs a DeployDB administrator\nI should be able to update DeployDB configuration",
  "name": "DeployDB config APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 337926000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;when-the-system-is-idle,-reloading-the-shall-succeed",
  "description": "",
  "name": "When the system is idle, reloading the shall succeed",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "Models configuration directory path is \"./example/modelConfig\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I POST to \"/tasks/configReload\" from the admin app",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 12,
  "doc_string": {
    "value": "Done!",
    "line": 13,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "./example/modelConfig",
      "offset": 40
    }
  ],
  "location": "HttpSteps.groovy:105"
});
formatter.result({
  "duration": 739000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:59"
});
formatter.result({
  "duration": 107629000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 383000,
  "status": "passed"
});
formatter.after({
  "duration": 7653000,
  "status": "passed"
});
formatter.before({
  "duration": 356880000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;if-deployments-are-in-progress,-then-attempt-to-reload-config-should-succeed.",
  "description": "        A deployment is considered as in progress (aka NOT verified), if the status\n        does not have value of SUCCESS or FAILED",
  "name": "If deployments are in progress, then attempt to reload config should succeed.",
  "keyword": "Scenario",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "Models configuration directory path is \"./example/modelConfig\"",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I POST to \"/tasks/configReload\" from the admin app",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 26,
  "doc_string": {
    "value": "Done!",
    "line": 27,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4204000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "./example/modelConfig",
      "offset": 40
    }
  ],
  "location": "HttpSteps.groovy:105"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:59"
});
formatter.result({
  "duration": 35187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 492000,
  "status": "passed"
});
formatter.after({
  "duration": 8813000,
  "status": "passed"
});
formatter.before({
  "duration": 306533000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;after-config-reload,-transitions-of-in-progress-deployments-should-use-old-config.",
  "tags": [
    {
      "name": "@freezetime",
      "line": 32
    }
  ],
  "description": "        If a deployment is in CREATED state and configuration is reloaded, then\n        a deployment update of STARTED state should invoke set of global webhook\n        and environment webhook, as specified by the older config",
  "name": "After config reload, transitions of in-progress deployments should use old config.",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"started\" configuration:",
  "keyword": "Given ",
  "line": 37,
  "doc_string": {
    "value": "  deployment:\n    started:\n       - http://localhost:10000/job/old-notify-deployment-started/build",
    "line": 38,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 43,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    started:\n      - http://localhost:10000/job/another-old-notify-deployment-started/build",
    "line": 44,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "Models configuration is reloaded from directory path \"./example/modelConfig\"",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 54,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 59,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 60,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 77,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 78,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "started",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 24153000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "started",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 9108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 3810000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "./example/modelConfig",
      "offset": 54
    }
  ],
  "location": "HttpSteps.groovy:109"
});
formatter.result({
  "duration": 25093000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 49442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1009298000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1003660000,
  "status": "passed"
});
formatter.after({
  "duration": 14560000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.uri("api/deployment/reading.feature");
formatter.feature({
  "id": "deployment-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about deployments",
  "name": "Deployment READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 342416000,
  "status": "passed"
});
formatter.before({
  "duration": 87000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-all-deployments",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching all deployments",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/deployments\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4596000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 24716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1896000,
  "status": "passed"
});
formatter.after({
  "duration": 8824000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 357085000,
  "status": "passed"
});
formatter.before({
  "duration": 692000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-a-deployment-by-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 40
    }
  ],
  "description": "",
  "name": "Fetching a deployment by ID",
  "keyword": "Scenario",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 43
});
formatter.step({
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When ",
  "line": 44
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 45
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 46,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 47,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 5835000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 23592000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1192000,
  "status": "passed"
});
formatter.after({
  "duration": 8089000,
  "status": "passed"
});
formatter.after({
  "duration": 202000,
  "status": "passed"
});
formatter.before({
  "duration": 327111000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-a-deployment-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching a deployment by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 73,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When ",
  "line": 75
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 76
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 16226000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 7410000,
  "status": "passed"
});
formatter.before({
  "duration": 319768000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-a-non-numeric-id",
  "tags": [
    {
      "name": "@error",
      "line": 79
    }
  ],
  "description": "",
  "name": "Fetching an deployment by a non-numeric ID",
  "keyword": "Scenario",
  "line": 80,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/0xdeadbeef\"",
  "keyword": "When ",
  "line": 82
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 83
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14576000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.after({
  "duration": 7521000,
  "status": "passed"
});
formatter.before({
  "duration": 302777000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-an-invalid-content-type",
  "tags": [
    {
      "name": "@error",
      "line": 100
    }
  ],
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "name": "Fetching an deployment with an invalid content type",
  "keyword": "Scenario",
  "line": 101,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 107
});
formatter.step({
  "name": "I GET \"/api/deployments/1\" with custom headers:",
  "keyword": "When ",
  "line": 108,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 109
    },
    {
      "cells": [
        "Accept",
        "application/xml"
      ],
      "line": 110
    }
  ]
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 111
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4009000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:67"
});
formatter.result({
  "duration": 13230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.after({
  "duration": 7025000,
  "status": "passed"
});
formatter.before({
  "duration": 298972000,
  "status": "passed"
});
formatter.before({
  "duration": 78000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-the-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 114
    }
  ],
  "description": "",
  "name": "Fetching an deployment by the pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 115,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 117
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 118
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 119
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 120,
  "doc_string": {
    "value": "   [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 121,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:46"
});
formatter.result({
  "duration": 5784000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 22430000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1719000,
  "status": "passed"
});
formatter.after({
  "duration": 7267000,
  "status": "passed"
});
formatter.after({
  "duration": 30000,
  "status": "passed"
});
formatter.before({
  "duration": 426547000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-page-number",
  "tags": [
    {
      "name": "@error",
      "line": 169
    }
  ],
  "description": "",
  "name": "Fetching an deployment with invalid page number",
  "keyword": "Scenario",
  "line": 170,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 172
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 173
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d1\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 29038000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.after({
  "duration": 10029000,
  "status": "passed"
});
formatter.before({
  "duration": 610093000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-data-type-for-pagesize",
  "tags": [
    {
      "name": "@error",
      "line": 176
    }
  ],
  "description": "",
  "name": "Fetching an deployment with invalid data type for pageSize",
  "keyword": "Scenario",
  "line": 177,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When ",
  "line": 179
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 180
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 1168194000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 8029000,
  "status": "passed"
});
formatter.before({
  "duration": 329583000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-the-latest-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 183
    }
  ],
  "description": "",
  "name": "Fetching the latest deployment",
  "keyword": "Scenario",
  "line": 184,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 186
});
formatter.step({
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When ",
  "line": 187
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 188
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 189,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 190,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20510000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1253000,
  "status": "passed"
});
formatter.after({
  "duration": 7597000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 312014000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-the-latest-deployment-when-multiple-deployments-are-present",
  "tags": [
    {
      "name": "@freezetime",
      "line": 215
    }
  ],
  "description": "",
  "name": "Fetching the latest deployment when multiple deployments are present",
  "keyword": "Scenario",
  "line": 216,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 218
});
formatter.step({
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When ",
  "line": 219
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 220
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 221,
  "doc_string": {
    "value": "  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 222,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:46"
});
formatter.result({
  "duration": 4783000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 19281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1035000,
  "status": "passed"
});
formatter.after({
  "duration": 6522000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 314684000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-deployment-based-on-artifact-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 247
    }
  ],
  "description": "",
  "name": "Fetching deployment based on artifact id",
  "keyword": "Scenario",
  "line": 248,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments for artifacts",
  "keyword": "Given ",
  "line": 250
});
formatter.step({
  "name": "I GET \"/api/deployments/by-artifact/2\"",
  "keyword": "When ",
  "line": 251
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 252
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 253,
  "doc_string": {
    "value": "[{\n  \"id\" : 5,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"dev-integ\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 6,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"integ\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 7,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"pre-prod\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 8,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"prod\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n}]",
    "line": 254,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:82"
});
formatter.result({
  "duration": 10444000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/by-artifact/2",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20915000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1605000,
  "status": "passed"
});
formatter.after({
  "duration": 8314000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 299457000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-deployment-by-artifact-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching deployment by artifact id that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 322,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/by-artifact/1\"",
  "keyword": "When ",
  "line": 324
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 325
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/by-artifact/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 17137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 8260000,
  "status": "passed"
});
formatter.before({
  "duration": 299758000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-pagenumber\u003d0-and-perpagesize\u003d0-returns-0-deployments",
  "tags": [
    {
      "name": "@error",
      "line": 328
    }
  ],
  "description": "",
  "name": "Fetching an deployment by pageNumber\u003d0 and perPageSize\u003d0 returns 0 deployments",
  "keyword": "Scenario",
  "line": 329,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 331
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0\"",
  "keyword": "When ",
  "line": 332
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 333
});
formatter.match({
  "location": "DeploymentSteps.groovy:46"
});
formatter.result({
  "duration": 4653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.after({
  "duration": 7322000,
  "status": "passed"
});
formatter.uri("api/deployment/updating.feature");
formatter.feature({
  "id": "deployment-update-apis",
  "description": "\nAs a RESTful client or user\nI should be able to update existing deployments in the system",
  "name": "Deployment UPDATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 341053000,
  "status": "passed"
});
formatter.before({
  "duration": 78000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Updating a deployment with a status COMPLETED",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 11,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 12,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"COMPLETED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4592000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 24965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 124000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1645000,
  "status": "passed"
});
formatter.after({
  "duration": 8262000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 410516000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-failed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 45
    }
  ],
  "description": "",
  "name": "Updating a deployment with a status FAILED",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 48
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 49,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 50,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 56,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"FAILED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 57,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 28886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1067000,
  "status": "passed"
});
formatter.after({
  "duration": 9053000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 311057000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-invalid-status-transition",
  "description": "",
  "name": "Updating a deployment with invalid status transition",
  "keyword": "Scenario",
  "line": 83,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 85
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 86,
  "doc_string": {
    "value": "  {\n    \"status\" : \"NOT_STARTED\"\n  }",
    "line": 87,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 92
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 3799000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 17012000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.after({
  "duration": 8076000,
  "status": "passed"
});
formatter.before({
  "duration": 351246000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-an-malformed-status",
  "tags": [
    {
      "name": "@error",
      "line": 95
    }
  ],
  "description": "",
  "name": "Updating a deployment with an malformed status",
  "keyword": "Scenario",
  "line": 96,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 98
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 99,
  "doc_string": {
    "value": "  {\n    \"status\" : \"INVALID\"\n  }",
    "line": 100,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 105
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 3999000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 18122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.after({
  "duration": 7725000,
  "status": "passed"
});
formatter.before({
  "duration": 358121000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 108
    }
  ],
  "description": "",
  "name": "Updating a deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 109,
  "type": "scenario"
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 111,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 112,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 117
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 21383000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 7588000,
  "status": "passed"
});
formatter.uri("api/environment/reading.feature");
formatter.feature({
  "id": "environment-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about environments",
  "name": "Environment READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 361174000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-all-environments",
  "description": "",
  "name": "Fetching all environments",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/environments\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 21,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhook\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }]",
    "line": 22,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "integ",
      "offset": 36
    }
  ],
  "location": "EnvironmentSteps.groovy:7"
});
formatter.result({
  "duration": 6679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 17256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1086000,
  "status": "passed"
});
formatter.after({
  "duration": 8623000,
  "status": "passed"
});
formatter.before({
  "duration": 349767000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-an-environment-by-name-that-exists",
  "description": "",
  "name": "Fetching an environment by name that exists",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "line": 41,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
    "line": 42,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/environments/integ\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 52
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhook\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }",
    "line": 54,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "integ",
      "offset": 36
    }
  ],
  "location": "EnvironmentSteps.groovy:7"
});
formatter.result({
  "duration": 5468000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/integ",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 15353000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 935000,
  "status": "passed"
});
formatter.after({
  "duration": 8991000,
  "status": "passed"
});
formatter.before({
  "duration": 355378000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-an-environment-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an environment by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 71,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/environments/faas\"",
  "keyword": "When ",
  "line": 73
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 74
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 12279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.after({
  "duration": 6842000,
  "status": "passed"
});
formatter.before({
  "duration": 296339000,
  "status": "passed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-all-deployments-in-the-environment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 77
    }
  ],
  "description": "",
  "name": "Fetching all deployments in the environment",
  "keyword": "Scenario",
  "line": 78,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 80
});
formatter.step({
  "name": "I GET \"/api/environments/pre-prod/deployments\"",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 82
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 83,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 84,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 4793000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/pre-prod/deployments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 35058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1430000,
  "status": "passed"
});
formatter.after({
  "duration": 9826000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 322958000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-all-deployments-in-the-environment-by-the-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 110
    }
  ],
  "description": "",
  "name": "Fetching all deployments in the environment by the pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 111,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 113
});
formatter.step({
  "name": "I GET \"/api/environments/pre-prod/deployments?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 114
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 115
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 116,
  "doc_string": {
    "value": "   [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 117,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:46"
});
formatter.result({
  "duration": 4441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/pre-prod/deployments?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 20216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1413000,
  "status": "passed"
});
formatter.after({
  "duration": 6358000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 402378000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-deployments-for-an-environment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching deployments for an environment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 165,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/environments/pre-prod/deployments\"",
  "keyword": "When ",
  "line": 167
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 168
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/pre-prod/deployments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 16811000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.after({
  "duration": 7674000,
  "status": "passed"
});
formatter.uri("api/flow/reading.feature");
formatter.feature({
  "id": "flow-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about flows",
  "name": "Flow READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 314421000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "id": "flow-read-apis;fetching-a-flow-by-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching a Flow by ID",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is a flow",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/flows/1\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "{\n  \"id\" : 1,\n  \"createdAt\" : \"{{created_timestamp}}\",\n  \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n  \"deployments\":[{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"service\" : \"faas\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"production\",\n    \"service\" : \"faas\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }],\n  \"service\":\"faas\"\n}",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "FlowSteps.groovy:13"
});
formatter.result({
  "duration": 6713000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/flows/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 18123000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1221000,
  "status": "passed"
});
formatter.after({
  "duration": 7174000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 315987000,
  "status": "passed"
});
formatter.scenario({
  "id": "flow-read-apis;fetching-a-flow-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching a Flow by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 62,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/flows/1\"",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 65
});
formatter.match({
  "arguments": [
    {
      "val": "/api/flows/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 23498000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 234000,
  "status": "passed"
});
formatter.after({
  "duration": 12162000,
  "status": "passed"
});
formatter.uri("api/health.feature");
formatter.feature({
  "id": "the-health-endpoint",
  "description": "\nAs a DeployDB administrator\nI should be able to view the health of the application",
  "name": "The health endpoint",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 339181000,
  "status": "passed"
});
formatter.scenario({
  "id": "the-health-endpoint;fetching-health-under-normal-circumstances",
  "description": "\nAssuming the application is up and running properly, the built-in\nhealthcheck endpoint should return information about all the configured\nhealthchecks currently running inside of DeployDB",
  "name": "Fetching health under normal circumstances",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/healthcheck\" from the admin app",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 14,
  "doc_string": {
    "value": "{\n  \"deadlocks\" : {\n    \"healthy\" : true\n  },\n  \"sanity\" : {\n    \"healthy\" : true\n  },\n  \"hibernate\" : {\n    \"healthy\" : true\n  },\n  \"webhook\" : {\n    \"healthy\" : true\n  }\n}",
    "line": 15,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "/healthcheck",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:14"
});
formatter.result({
  "duration": 36460000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 812000,
  "status": "passed"
});
formatter.after({
  "duration": 7886000,
  "status": "passed"
});
formatter.uri("api/pipeline/reading.feature");
formatter.feature({
  "id": "pipeline-read-apis",
  "description": "As a RESTful client or user\nI should be able to read information about pipelines",
  "name": "Pipeline READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 302798000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-all-pipelines",
  "description": "",
  "name": "Fetching all pipelines",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "line": 8,
  "doc_string": {
    "value": "description: \"Development to production pipeline\"\nenvironments:\n     dev-alpha:\n     dev-beta:\n     integ:\n     preprod:\n       promotions:\n          - prod-preflight\n          - manual\n     prod:",
    "line": 9,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/pipelines\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 23,
  "doc_string": {
    "value": "  [{\n      \"ident\" : \"devtoprod\",\n      \"description\": \"Development to production pipeline\",\n      \"environments\": {\n        \"dev-alpha\": {\n          \"promotions\": []\n        },\n        \"dev-beta\": {\n          \"promotions\": []\n        },\n        \"integ\": {\n          \"promotions\": []\n        },\n        \"preprod\": {\n          \"promotions\": [\n            \"prod-preflight\",\n            \"manual\"\n          ]\n        },\n        \"prod\": {\n          \"promotions\": []\n        }\n      }\n  }]",
    "line": 24,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "devtoprod",
      "offset": 32
    }
  ],
  "location": "PipelineSteps.groovy:7"
});
formatter.result({
  "duration": 6249000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14899000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1120000,
  "status": "passed"
});
formatter.after({
  "duration": 8222000,
  "status": "passed"
});
formatter.before({
  "duration": 275907000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-exists",
  "description": "",
  "name": "Fetching an pipeline by name that exists",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "line": 54,
  "doc_string": {
    "value": "description: \"Development to production pipeline\"\nenvironments:\n  dev-alpha:\n  dev-beta:\n  integ:\n  pre-prod:\n    promotions:\n      - prod-preflight\n      - manual\n  prod:",
    "line": 55,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/pipelines/devtoprod\"",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 68
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 69,
  "doc_string": {
    "value": "{\n  \"ident\" : \"devtoprod\",\n  \"description\": \"Development to production pipeline\",\n  \"environments\": {\n    \"dev-alpha\": {\n      \"promotions\": []\n    },\n    \"dev-beta\": {\n      \"promotions\": []\n    },\n    \"integ\": {\n      \"promotions\": []\n    },\n    \"pre-prod\": {\n      \"promotions\": [\n        \"prod-preflight\",\n        \"manual\"\n      ]\n    },\n    \"prod\": {\n      \"promotions\": []\n    }\n  }\n}",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "devtoprod",
      "offset": 32
    }
  ],
  "location": "PipelineSteps.groovy:7"
});
formatter.result({
  "duration": 4974000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines/devtoprod",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 13125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 793000,
  "status": "passed"
});
formatter.after({
  "duration": 16366000,
  "status": "passed"
});
formatter.before({
  "duration": 303689000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an pipeline by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 98,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/pipelines/fass\"",
  "keyword": "When ",
  "line": 100
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 101
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines/fass",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 12780000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.after({
  "duration": 6361000,
  "status": "passed"
});
formatter.uri("api/promotion/creating.feature");
formatter.feature({
  "id": "promotion-result-apis",
  "description": "\nAs a RESTful client or user\nI should be able to add Promotion result for a Deployment in the system",
  "name": "Promotion Result APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 273153000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-associated-with-a-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adding a result for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 21,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 22,
    "content_type": ""
  }
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 269000,
  "status": "passed"
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 50587000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 34581000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 997000,
  "status": "passed"
});
formatter.after({
  "duration": 7572000,
  "status": "passed"
});
formatter.after({
  "duration": 13000,
  "status": "passed"
});
formatter.before({
  "duration": 299376000,
  "status": "passed"
});
formatter.before({
  "duration": 81000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-manual-ldap-promotion-associated-with-a-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 33
    }
  ],
  "description": "        succeeds only if user belongs to the configured group",
  "name": "Adding a result for a Manual LDAP Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion configuration name \"manualPromo\":",
  "keyword": "Given ",
  "line": 37,
  "doc_string": {
    "value": "type:  deploydb.models.promotion.ManualLDAPPromotionImpl\ndescription: \"Manual LDAP Promotion\"\nattributes:\n  allowedGroup: fox\n",
    "line": 38,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment with \"manualPromo\" promotion",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with credentials \"peter:griffin\" and:",
  "keyword": "When ",
  "line": 46,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"manualPromo\",\n    \"status\" : \"SUCCESS\"\n  }",
    "line": 47,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 54,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"manualPromo\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : null,\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 55,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "manualPromo",
      "offset": 32
    }
  ],
  "location": "PromotionSteps.groovy:8"
});
formatter.result({
  "duration": 7246000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manualPromo",
      "offset": 28
    }
  ],
  "location": "DeploymentSteps.groovy:181"
});
formatter.result({
  "duration": 5617000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    },
    {
      "val": "peter",
      "offset": 60
    },
    {
      "val": "griffin",
      "offset": 66
    }
  ],
  "location": "HttpSteps.groovy:30"
});
formatter.result({
  "duration": 105558000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 718000,
  "status": "passed"
});
formatter.after({
  "duration": 9697000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 293016000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-with-invalid-status-for-a-promotion-associated-with-a-deployment",
  "description": "",
  "name": "Adding a result with invalid status for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 66,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 68
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 69
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 70,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"CREATED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 71,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 78
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 3894000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 19108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.after({
  "duration": 6428000,
  "status": "passed"
});
formatter.before({
  "duration": 289403000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Adding Promotion result for a Deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 81,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 83,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 84,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 91
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 16457000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 7681000,
  "status": "passed"
});
formatter.before({
  "duration": 321290000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "tags": [
    {
      "name": "@error",
      "line": 94
    }
  ],
  "description": "",
  "name": "Adding a result for a Promotion which is not associated with the Deployment",
  "keyword": "Scenario",
  "line": 95,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 97,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"test-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 98,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 105
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 14869000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.after({
  "duration": 7616000,
  "status": "passed"
});
formatter.uri("api/promotion/reading.feature");
formatter.feature({
  "id": "promotion-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about promotions",
  "name": "Promotion READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 286317000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-all-promotions",
  "description": "",
  "name": "Fetching all promotions",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "type:  deploydb.models.promotion.BasicPromotionImpl\ndescription: \"Smoke test the Fun as a Service service\"",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/promotions\"",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 16,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"basic\",\n    \"type\" : \"deploydb.models.promotion.BasicPromotionImpl\",\n    \"description\" : \"Smoke test the Fun as a Service service\",\n    \"attributes\" : null\n  }]",
    "line": 17,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "basic",
      "offset": 32
    }
  ],
  "location": "PromotionSteps.groovy:8"
});
formatter.result({
  "duration": 4812000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 15369000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 724000,
  "status": "passed"
});
formatter.after({
  "duration": 7301000,
  "status": "passed"
});
formatter.before({
  "duration": 304735000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-exists",
  "description": "",
  "name": "Fetching an promotion by name that exists",
  "keyword": "Scenario",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "line": 29,
  "doc_string": {
    "value": "type:  deploydb.models.promotion.BasicPromotionImpl\ndescription: \"Smoke test the Fun as a Service service\"",
    "line": 30,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/promotions/basic\"",
  "keyword": "When ",
  "line": 34
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 35
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 36,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"basic\",\n    \"type\" : \"deploydb.models.promotion.BasicPromotionImpl\",\n    \"description\" : \"Smoke test the Fun as a Service service\",\n    \"attributes\" : null\n  }",
    "line": 37,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "basic",
      "offset": 32
    }
  ],
  "location": "PromotionSteps.groovy:8"
});
formatter.result({
  "duration": 7831000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions/basic",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 16698000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 700000,
  "status": "passed"
});
formatter.after({
  "duration": 8029000,
  "status": "passed"
});
formatter.before({
  "duration": 288467000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an promotion by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 47,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/promotions/faas\"",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 50
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 12172000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.after({
  "duration": 6843000,
  "status": "passed"
});
formatter.before({
  "duration": 386888000,
  "status": "passed"
});
formatter.before({
  "duration": 57000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-associated-with-a-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 53
    }
  ],
  "description": "",
  "name": "Fetching a result for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 56
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When ",
  "line": 57
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 58
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 59,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"STARTED\",\n    \"infoUrl\" : null,\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 60,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 6106000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 22200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 678000,
  "status": "passed"
});
formatter.after({
  "duration": 7112000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 294574000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching Promotion result for a Deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 71,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When ",
  "line": 73
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 74
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 12603000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 7417000,
  "status": "passed"
});
formatter.before({
  "duration": 266029000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "tags": [
    {
      "name": "@error",
      "line": 77
    }
  ],
  "description": "",
  "name": "Fetching a result for a Promotion which is not associated with the Deployment",
  "keyword": "Scenario",
  "line": 78,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 80
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/5\"",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 82
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 3519000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 7377000,
  "status": "passed"
});
formatter.uri("api/service/reading.feature");
formatter.feature({
  "id": "service-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about services",
  "name": "Service READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 282724000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-all-services",
  "description": "",
  "name": "Fetching all services",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/services\"",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 24,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }]",
    "line": 25,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "faas",
      "offset": 31
    }
  ],
  "location": "ServiceSteps.groovy:7"
});
formatter.result({
  "duration": 6186000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14904000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 110000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 834000,
  "status": "passed"
});
formatter.after({
  "duration": 6527000,
  "status": "passed"
});
formatter.before({
  "duration": 281462000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-an-service-by-name-that-exists",
  "description": "",
  "name": "Fetching an service by name that exists",
  "keyword": "Scenario",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "line": 47,
  "doc_string": {
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke",
    "line": 48,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 61
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 62,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }",
    "line": 63,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "faas",
      "offset": 31
    }
  ],
  "location": "ServiceSteps.groovy:7"
});
formatter.result({
  "duration": 5383000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 14494000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 719000,
  "status": "passed"
});
formatter.after({
  "duration": 6574000,
  "status": "passed"
});
formatter.before({
  "duration": 276231000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-an-service-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an service by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 84,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When ",
  "line": 86
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 87
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:18"
});
formatter.result({
  "duration": 11967000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:80"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.after({
  "duration": 7499000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCompleted.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-completed",
  "description": "",
  "name": "Webhook invocation  when deployment is completed",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 260288000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-completed;webhooks-should-be-invoked-when-deployment-is-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when deployment is completed",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 9899000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2644000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 20332000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004455000,
  "status": "passed"
});
formatter.after({
  "duration": 8328000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 261965000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-completed;environment-webhooks-should-be-invoked-when-artifacts-are-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 38
    },
    {
      "name": "@webhook",
      "line": 38
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are completed",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 40,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 41,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 49,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 50,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 55,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 56,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 73,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 74
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentcompleted.v1+json"
      ],
      "line": 75
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 67
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2414000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 19636000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005653000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 4476000,
  "status": "passed"
});
formatter.after({
  "duration": 7933000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCreated.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-created",
  "description": "",
  "name": "Webhook invocation  when deployment is created",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 961594000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created;webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 16,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 17,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 34,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 35
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentcreated.v1+json"
      ],
      "line": 36
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 10702000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 202000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 24476000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1002728000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.after({
  "duration": 8135000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 306288000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created;environment-webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 39
    },
    {
      "name": "@webhook",
      "line": 39
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "Given ",
  "line": 41,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 42,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 49
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 54,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7289000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 383000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 242000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 219000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 27565000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1003493000,
  "status": "passed"
});
formatter.after({
  "duration": 8434000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentStarted.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-started",
  "description": "",
  "name": "Webhook invocation  when deployment is started",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 275451000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-started;webhooks-should-be-invoked-when-deployment-is-started",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when deployment is started",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"started\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 37
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentstarted.v1+json"
      ],
      "line": 38
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "started",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 12182000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2805000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 21441000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006065000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 200000,
  "status": "passed"
});
formatter.after({
  "duration": 10193000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 254411000,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-started;environment-webhooks-should-be-invoked-when-artifacts-are-started",
  "tags": [
    {
      "name": "@freezetime",
      "line": 40
    },
    {
      "name": "@webhook",
      "line": 40
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are started",
  "keyword": "Scenario",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 42,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 43,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 51,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 52,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 57,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 58,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "started",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6248000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2960000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:63"
});
formatter.result({
  "duration": 20775000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005887000,
  "status": "passed"
});
formatter.after({
  "duration": 11192000,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.uri("api/webhook/multipleWebhooks.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks",
  "description": "",
  "name": "Webhook invocation  when deployment is created with multiple webhooks",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 272711000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;multiple-webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Multiple Webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-created/build\n       - http://localhost:10000/job/another-notify-deployment-created/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 17,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 18,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 35,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 36,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 9351000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 205000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 394000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 21260000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1003878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1005208000,
  "status": "passed"
});
formatter.after({
  "duration": 10601000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedFail.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state",
  "description": "",
  "name": "Webhook invocation when promotion is completed with failed state",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 249596000,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;webhooks-should-be-invoked-when-promotion-is-completed-in-failed-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when promotion is completed in failed state",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 21,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }",
    "line": 22,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 46,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 47
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.promotioncompleted.v1+json"
      ],
      "line": 48
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 8846000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2576000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 538000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 21478000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006362000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
});
formatter.after({
  "duration": 10526000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 266101000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-failed-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 51
    },
    {
      "name": "@webhook",
      "line": 51
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when promotions are completed in failed state",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 53,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 54,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 63,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 64,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 71,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }",
    "line": 72,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6621000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2755000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 201000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 20182000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006020000,
  "status": "passed"
});
formatter.after({
  "duration": 9586000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedSuccess.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state",
  "description": "",
  "name": "Webhook invocation when promotion is completed with success state",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 301354000,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;webhooks-should-be-invoked-when-promotion-is-completed-in-success-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when promotion is completed in success state",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 21,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 22,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 46,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 47
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.promotioncompleted.v1+json"
      ],
      "line": 48
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 8998000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2277000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 19977000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004622000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 178000,
  "status": "passed"
});
formatter.after({
  "duration": 8709000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 267346000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-success-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 51
    },
    {
      "name": "@webhook",
      "line": 51
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when promotions are completed in success state",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 53,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 54,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 63,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 64,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 71,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 72,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6323000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:110"
});
formatter.result({
  "duration": 2532000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 479000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:26"
});
formatter.result({
  "duration": 21795000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004099000,
  "status": "passed"
});
formatter.after({
  "duration": 9685000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
});