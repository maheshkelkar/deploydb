$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "id": "artifact-create-apis",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "name": "Artifact CREATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4180028000,
  "status": "passed"
});
formatter.before({
  "duration": 3501000,
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
  "duration": 86598000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 4698000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 4468000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 2958000,
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
  "duration": 638984000,
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
  "duration": 6497000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 57792000,
  "status": "passed"
});
formatter.after({
  "duration": 35591000,
  "status": "passed"
});
formatter.after({
  "duration": 552000,
  "status": "passed"
});
formatter.before({
  "duration": 901762000,
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
  "duration": 76887000,
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
  "duration": 122000,
  "status": "passed"
});
formatter.after({
  "duration": 22485000,
  "status": "passed"
});
formatter.before({
  "duration": 930978000,
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
  "duration": 61984000,
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
  "duration": 128000,
  "status": "passed"
});
formatter.after({
  "duration": 20230000,
  "status": "passed"
});
formatter.before({
  "duration": 919161000,
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
  "duration": 54452000,
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
  "duration": 167000,
  "status": "passed"
});
formatter.after({
  "duration": 20317000,
  "status": "passed"
});
formatter.before({
  "duration": 577142000,
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
  "duration": 46144000,
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
  "duration": 138000,
  "status": "passed"
});
formatter.after({
  "duration": 15676000,
  "status": "passed"
});
formatter.before({
  "duration": 513675000,
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
  "duration": 44000,
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
  "duration": 1713000,
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
  "duration": 30918000,
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
  "duration": 168000,
  "status": "passed"
});
formatter.after({
  "duration": 14823000,
  "status": "passed"
});
formatter.before({
  "duration": 724955000,
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
  "duration": 635000,
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
  "duration": 29603000,
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
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 28024000,
  "status": "passed"
});
formatter.before({
  "duration": 954813000,
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
  "duration": 54000,
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
  "duration": 750000,
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
  "duration": 41798000,
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
  "duration": 163000,
  "status": "passed"
});
formatter.after({
  "duration": 15543000,
  "status": "passed"
});
formatter.before({
  "duration": 717259000,
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
  "duration": 44000,
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
  "duration": 569000,
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
  "duration": 25781000,
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
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 12360000,
  "status": "passed"
});
formatter.before({
  "duration": 410300000,
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
  "duration": 366000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 307000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 226000,
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
  "duration": 38947000,
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
  "duration": 181000,
  "status": "passed"
});
formatter.after({
  "duration": 11319000,
  "status": "passed"
});
formatter.before({
  "duration": 399463000,
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
  "duration": 1148000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 286000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 247000,
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
  "duration": 29487000,
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
  "duration": 10262000,
  "status": "passed"
});
formatter.before({
  "duration": 473455000,
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
  "duration": 335000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 255000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 186000,
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
  "duration": 29541000,
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
  "duration": 148000,
  "status": "passed"
});
formatter.after({
  "duration": 10241000,
  "status": "passed"
});
formatter.before({
  "duration": 455858000,
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
  "duration": 214000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 267000,
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
  "duration": 27553000,
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
  "duration": 115000,
  "status": "passed"
});
formatter.after({
  "duration": 11367000,
  "status": "passed"
});
formatter.before({
  "duration": 398748000,
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
  "duration": 4403000,
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
  "duration": 35368000,
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
  "duration": 123000,
  "status": "passed"
});
formatter.after({
  "duration": 10340000,
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
  "duration": 417585000,
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
  "duration": 3506000,
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
  "duration": 23354000,
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
  "duration": 125000,
  "status": "passed"
});
formatter.after({
  "duration": 11219000,
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
  "duration": 596689000,
  "status": "passed"
});
formatter.before({
  "duration": 89000,
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
  "duration": 3696000,
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
  "duration": 39130000,
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
  "duration": 513000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1128000,
  "status": "passed"
});
formatter.after({
  "duration": 10970000,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 462414000,
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
  "duration": 3860000,
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
  "duration": 34623000,
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
  "duration": 358000,
  "status": "passed"
});
formatter.after({
  "duration": 11467000,
  "status": "passed"
});
formatter.before({
  "duration": 465060000,
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
  "duration": 29299000,
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
  "duration": 9159000,
  "status": "passed"
});
formatter.before({
  "duration": 397376000,
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
  "duration": 20985000,
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
  "duration": 9974000,
  "status": "passed"
});
formatter.before({
  "duration": 394086000,
  "status": "passed"
});
formatter.before({
  "duration": 164000,
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
  "duration": 2745000,
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
  "duration": 32614000,
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
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 3638000,
  "status": "passed"
});
formatter.after({
  "duration": 10973000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 420999000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
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
  "duration": 6519000,
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
  "duration": 31677000,
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
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1317000,
  "status": "passed"
});
formatter.after({
  "duration": 10200000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 340730000,
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
  "duration": 19026000,
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
  "duration": 8648000,
  "status": "passed"
});
formatter.before({
  "duration": 339638000,
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
  "duration": 18004000,
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
  "duration": 8482000,
  "status": "passed"
});
formatter.before({
  "duration": 358983000,
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
  "duration": 20934000,
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
  "duration": 118000,
  "status": "passed"
});
formatter.after({
  "duration": 9232000,
  "status": "passed"
});
formatter.before({
  "duration": 364008000,
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
  "duration": 5689000,
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
  "duration": 18377000,
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
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 9270000,
  "status": "passed"
});
formatter.before({
  "duration": 337868000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
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
  "duration": 3138000,
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
  "duration": 21611000,
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
  "duration": 900000,
  "status": "passed"
});
formatter.after({
  "duration": 8965000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 345817000,
  "status": "passed"
});
formatter.before({
  "duration": 60000,
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
  "duration": 4023000,
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
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 945000,
  "status": "passed"
});
formatter.after({
  "duration": 8418000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 339707000,
  "status": "passed"
});
formatter.before({
  "duration": 67000,
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
  "duration": 4568000,
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
  "duration": 30603000,
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
  "duration": 1160000,
  "status": "passed"
});
formatter.after({
  "duration": 9397000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 430297000,
  "status": "passed"
});
formatter.before({
  "duration": 64000,
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
  "duration": 3842000,
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
  "duration": 20434000,
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
  "duration": 1016000,
  "status": "passed"
});
formatter.after({
  "duration": 8146000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 318262000,
  "status": "passed"
});
formatter.before({
  "duration": 67000,
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
  "duration": 3586000,
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
  "duration": 18803000,
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
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1019000,
  "status": "passed"
});
formatter.after({
  "duration": 8130000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 316133000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
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
  "duration": 4252000,
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
  "duration": 19720000,
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
  "duration": 145000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1523000,
  "status": "passed"
});
formatter.after({
  "duration": 7805000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 304463000,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
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
  "duration": 3786000,
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
  "duration": 17976000,
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
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1056000,
  "status": "passed"
});
formatter.after({
  "duration": 8716000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 318071000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
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
  "duration": 4090000,
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
  "duration": 18213000,
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
  "duration": 985000,
  "status": "passed"
});
formatter.after({
  "duration": 7838000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 314378000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
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
  "duration": 3852000,
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
  "duration": 18246000,
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
  "duration": 1148000,
  "status": "passed"
});
formatter.after({
  "duration": 8440000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
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
  "duration": 309158000,
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
  "duration": 2914000,
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
  "duration": 15439000,
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
  "duration": 116000,
  "status": "passed"
});
formatter.after({
  "duration": 7536000,
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
  "duration": 337723000,
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
  "duration": 6746000,
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
  "duration": 46729000,
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
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 1045000,
  "status": "passed"
});
formatter.match({
  "location": "ArtifactSteps.groovy:46"
});
formatter.result({
  "duration": 1606000,
  "status": "passed"
});
formatter.after({
  "duration": 8258000,
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
  "duration": 308876000,
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
  "duration": 898000,
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
  "duration": 95668000,
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
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 399000,
  "status": "passed"
});
formatter.after({
  "duration": 7909000,
  "status": "passed"
});
formatter.before({
  "duration": 303046000,
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
  "duration": 4448000,
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
  "duration": 109000,
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
  "duration": 41729000,
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
  "location": "HttpSteps.groovy:84"
});
formatter.result({
  "duration": 761000,
  "status": "passed"
});
formatter.after({
  "duration": 8234000,
  "status": "passed"
});
formatter.before({
  "duration": 307158000,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
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
  "duration": 24794000,
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
  "duration": 9237000,
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
  "duration": 4815000,
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
  "duration": 25240000,
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
  "duration": 49257000,
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
  "duration": 1010395000,
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
  "duration": 1002907000,
  "status": "passed"
});
formatter.after({
  "duration": 11499000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
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
  "duration": 299261000,
  "status": "passed"
});
formatter.before({
  "duration": 56000,
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
  "duration": 4831000,
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
  "duration": 21360000,
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
  "duration": 2017000,
  "status": "passed"
});
formatter.after({
  "duration": 9825000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 304005000,
  "status": "passed"
});
formatter.before({
  "duration": 569000,
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
  "duration": 5853000,
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
  "duration": 21554000,
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
  "duration": 115000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1174000,
  "status": "passed"
});
formatter.after({
  "duration": 8076000,
  "status": "passed"
});
formatter.after({
  "duration": 225000,
  "status": "passed"
});
formatter.before({
  "duration": 1081643000,
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
  "duration": 18125000,
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
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 7455000,
  "status": "passed"
});
formatter.before({
  "duration": 315108000,
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
  "duration": 14981000,
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
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 7942000,
  "status": "passed"
});
formatter.before({
  "duration": 285632000,
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
  "duration": 4363000,
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
  "duration": 12926000,
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
  "duration": 93000,
  "status": "passed"
});
formatter.after({
  "duration": 7768000,
  "status": "passed"
});
formatter.before({
  "duration": 302811000,
  "status": "passed"
});
formatter.before({
  "duration": 81000,
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
  "duration": 5969000,
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
  "duration": 21073000,
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
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1537000,
  "status": "passed"
});
formatter.after({
  "duration": 8883000,
  "status": "passed"
});
formatter.after({
  "duration": 41000,
  "status": "passed"
});
formatter.before({
  "duration": 296541000,
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
  "duration": 14625000,
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
  "duration": 7470000,
  "status": "passed"
});
formatter.before({
  "duration": 285827000,
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
  "duration": 13899000,
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
  "duration": 7465000,
  "status": "passed"
});
formatter.before({
  "duration": 288347000,
  "status": "passed"
});
formatter.before({
  "duration": 47000,
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
  "duration": 3695000,
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
  "duration": 19631000,
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
  "duration": 116000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1132000,
  "status": "passed"
});
formatter.after({
  "duration": 8024000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 309005000,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
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
  "duration": 5030000,
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
  "duration": 19729000,
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
  "duration": 1021000,
  "status": "passed"
});
formatter.after({
  "duration": 7284000,
  "status": "passed"
});
formatter.after({
  "duration": 12000,
  "status": "passed"
});
formatter.before({
  "duration": 318838000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
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
  "duration": 10055000,
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
  "duration": 22697000,
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
  "duration": 136000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1646000,
  "status": "passed"
});
formatter.after({
  "duration": 7874000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 298960000,
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
  "duration": 14423000,
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
  "duration": 85000,
  "status": "passed"
});
formatter.after({
  "duration": 8263000,
  "status": "passed"
});
formatter.before({
  "duration": 285103000,
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
  "duration": 4804000,
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
  "duration": 13062000,
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
  "duration": 79000,
  "status": "passed"
});
formatter.after({
  "duration": 7572000,
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
  "duration": 267840000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
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
  "duration": 3539000,
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
  "duration": 22334000,
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
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1044000,
  "status": "passed"
});
formatter.after({
  "duration": 7624000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 276073000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
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
  "duration": 4282000,
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
  "duration": 22383000,
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
  "duration": 942000,
  "status": "passed"
});
formatter.after({
  "duration": 8275000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 277010000,
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
  "duration": 5011000,
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
  "duration": 17566000,
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
  "duration": 7613000,
  "status": "passed"
});
formatter.before({
  "duration": 266903000,
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
  "duration": 3770000,
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
  "duration": 17120000,
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
  "duration": 7841000,
  "status": "passed"
});
formatter.before({
  "duration": 311096000,
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
  "duration": 19413000,
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
  "duration": 118000,
  "status": "passed"
});
formatter.after({
  "duration": 6925000,
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
  "duration": 276547000,
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
  "duration": 6016000,
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
  "duration": 16123000,
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
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 732000,
  "status": "passed"
});
formatter.after({
  "duration": 7025000,
  "status": "passed"
});
formatter.before({
  "duration": 262966000,
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
  "duration": 5787000,
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
  "duration": 14993000,
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
  "duration": 92000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 739000,
  "status": "passed"
});
formatter.after({
  "duration": 7010000,
  "status": "passed"
});
formatter.before({
  "duration": 270156000,
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
  "duration": 12516000,
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
  "duration": 7471000,
  "status": "passed"
});
formatter.before({
  "duration": 271254000,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
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
  "duration": 4006000,
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
  "duration": 20307000,
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
  "duration": 91000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1021000,
  "status": "passed"
});
formatter.after({
  "duration": 7380000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 266688000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
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
  "duration": 8024000,
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
  "duration": 23205000,
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
  "duration": 92000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1246000,
  "status": "passed"
});
formatter.after({
  "duration": 7298000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 262640000,
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
  "duration": 14273000,
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
  "duration": 7306000,
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
  "duration": 318460000,
  "status": "passed"
});
formatter.before({
  "duration": 75000,
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
  "duration": 7091000,
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
  "duration": 25459000,
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
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1472000,
  "status": "passed"
});
formatter.after({
  "duration": 12155000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 296682000,
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
  "duration": 13653000,
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
  "duration": 6060000,
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
  "duration": 292645000,
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
  "duration": 30231000,
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
  "duration": 734000,
  "status": "passed"
});
formatter.after({
  "duration": 7877000,
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
  "duration": 294259000,
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
  "duration": 6587000,
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
  "duration": 15562000,
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
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 1369000,
  "status": "passed"
});
formatter.after({
  "duration": 12255000,
  "status": "passed"
});
formatter.before({
  "duration": 291544000,
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
  "duration": 4694000,
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
  "duration": 12912000,
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
  "duration": 695000,
  "status": "passed"
});
formatter.after({
  "duration": 7898000,
  "status": "passed"
});
formatter.before({
  "duration": 254395000,
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
  "duration": 12112000,
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
  "duration": 7721000,
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
  "duration": 250808000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
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
  "duration": 242000,
  "status": "passed"
});
formatter.match({
  "location": "DeploymentSteps.groovy:13"
});
formatter.result({
  "duration": 3457000,
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
  "duration": 29964000,
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
  "duration": 93000,
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
  "duration": 6934000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 264712000,
  "status": "passed"
});
formatter.before({
  "duration": 75000,
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
  "duration": 5593000,
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
  "duration": 4561000,
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
  "duration": 155776000,
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
  "duration": 110000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 903000,
  "status": "passed"
});
formatter.after({
  "duration": 8258000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 271323000,
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
  "duration": 3916000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 196000,
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
  "duration": 16443000,
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
  "duration": 94000,
  "status": "passed"
});
formatter.after({
  "duration": 6750000,
  "status": "passed"
});
formatter.before({
  "duration": 286778000,
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
  "duration": 13874000,
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
  "duration": 85000,
  "status": "passed"
});
formatter.after({
  "duration": 7386000,
  "status": "passed"
});
formatter.before({
  "duration": 261659000,
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
  "duration": 14849000,
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
  "duration": 148000,
  "status": "passed"
});
formatter.after({
  "duration": 7230000,
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
  "duration": 262714000,
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
  "duration": 4449000,
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
  "duration": 13035000,
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
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 634000,
  "status": "passed"
});
formatter.after({
  "duration": 6978000,
  "status": "passed"
});
formatter.before({
  "duration": 269816000,
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
  "duration": 4418000,
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
  "duration": 12456000,
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
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:89"
});
formatter.result({
  "duration": 588000,
  "status": "passed"
});
formatter.after({
  "duration": 6840000,
  "status": "passed"
});
formatter.before({
  "duration": 262000000,
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
  "duration": 12104000,
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
  "duration": 89000,
  "status": "passed"
});
formatter.after({
  "duration": 7119000,
  "status": "passed"
});
formatter.before({
  "duration": 263425000,
  "status": "passed"
});
formatter.before({
  "duration": 63000,
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
  "duration": 3813000,
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
  "duration": 19298000,
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
  "duration": 685000,
  "status": "passed"
});
formatter.after({
  "duration": 6543000,
  "status": "passed"
});
formatter.after({
  "duration": 13000,
  "status": "passed"
});
formatter.before({
  "duration": 358047000,
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
  "duration": 14885000,
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
  "duration": 138000,
  "status": "passed"
});
formatter.after({
  "duration": 7089000,
  "status": "passed"
});
formatter.before({
  "duration": 256937000,
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
  "duration": 3327000,
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
  "duration": 14082000,
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
  "duration": 87000,
  "status": "passed"
});
formatter.after({
  "duration": 6779000,
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
  "duration": 248514000,
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
  "duration": 6814000,
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
  "duration": 13723000,
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
  "duration": 727000,
  "status": "passed"
});
formatter.after({
  "duration": 6466000,
  "status": "passed"
});
formatter.before({
  "duration": 250048000,
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
  "duration": 5527000,
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
  "duration": 13392000,
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
  "duration": 687000,
  "status": "passed"
});
formatter.after({
  "duration": 7166000,
  "status": "passed"
});
formatter.before({
  "duration": 251174000,
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
  "duration": 11981000,
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
  "duration": 6911000,
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
  "duration": 254155000,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
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
  "duration": 11403000,
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
  "duration": 2569000,
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
  "duration": 21025000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004189000,
  "status": "passed"
});
formatter.after({
  "duration": 9542000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 249176000,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
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
  "duration": 6658000,
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
  "duration": 3489000,
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
  "duration": 19955000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1003736000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 6040000,
  "status": "passed"
});
formatter.after({
  "duration": 10070000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
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
  "duration": 262315000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
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
  "duration": 9668000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 204000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 165000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 132000,
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
  "duration": 23105000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1001829000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 288000,
  "status": "passed"
});
formatter.after({
  "duration": 9585000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 940689000,
  "status": "passed"
});
formatter.before({
  "duration": 101000,
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
  "duration": 6507000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 180000,
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
  "duration": 118000,
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
  "duration": 22755000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005637000,
  "status": "passed"
});
formatter.after({
  "duration": 10076000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
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
  "duration": 287377000,
  "status": "passed"
});
formatter.before({
  "duration": 38000,
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
  "duration": 9609000,
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
  "duration": 2784000,
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
  "duration": 19720000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004142000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 202000,
  "status": "passed"
});
formatter.after({
  "duration": 9096000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 237697000,
  "status": "passed"
});
formatter.before({
  "duration": 39000,
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
  "duration": 6427000,
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
  "duration": 2276000,
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
  "duration": 20579000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006340000,
  "status": "passed"
});
formatter.after({
  "duration": 10375000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
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
  "duration": 275008000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
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
  "duration": 9281000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 228000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 343000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 126000,
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
  "duration": 22326000,
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
  "duration": 1001469000,
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
  "duration": 1006099000,
  "status": "passed"
});
formatter.after({
  "duration": 10604000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
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
  "duration": 276722000,
  "status": "passed"
});
formatter.before({
  "duration": 42000,
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
  "duration": 11665000,
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
  "duration": 2874000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 488000,
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
  "duration": 38044000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006376000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 201000,
  "status": "passed"
});
formatter.after({
  "duration": 9415000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 255912000,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
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
  "duration": 6667000,
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
  "duration": 2468000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 212000,
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
  "duration": 21349000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005299000,
  "status": "passed"
});
formatter.after({
  "duration": 8630000,
  "status": "passed"
});
formatter.after({
  "duration": 12000,
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
  "duration": 239363000,
  "status": "passed"
});
formatter.before({
  "duration": 53000,
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
  "duration": 9331000,
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
  "duration": 2464000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 171000,
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
  "duration": 19347000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1002241000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 161000,
  "status": "passed"
});
formatter.after({
  "duration": 9191000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 286756000,
  "status": "passed"
});
formatter.before({
  "duration": 40000,
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
  "duration": 6474000,
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
  "duration": 2731000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 458000,
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
  "duration": 24286000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1003530000,
  "status": "passed"
});
formatter.after({
  "duration": 8687000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
});