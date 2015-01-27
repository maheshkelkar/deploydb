$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "id": "artifact-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4536090614,
  "status": "passed"
});
formatter.before({
  "duration": 6265728,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Creating a new artifact",
  "description": "\nThe creation of an artifact technically only requires group, name and\nversion. However it\u0027s a good idea to always provide a `sourceUrl` as well\nin order future users of DeployDB to be able to backtrack an artifact all\nthe way to the binary itself",
  "id": "artifact-create-apis;creating-a-new-artifact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I PUT to \"/api/v1/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 16,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }"
  }
});
formatter.step({
  "line": 23,
  "name": "the response should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : null,\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 1004146924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 6095390,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 97519850,
  "status": "passed"
});
formatter.after({
  "duration": 89693105,
  "status": "passed"
});
formatter.after({
  "duration": 717246,
  "status": "passed"
});
formatter.uri("api/artifact/deleting.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact DELETE APIs",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to delete artifacts",
  "id": "artifact-delete-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 757348139,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Attempting to delete an artifact",
  "description": "\nOnce artifacts are in DeployDB they\u0027re there forever. FOREVER.",
  "id": "artifact-delete-apis;attempting-to-delete-an-artifact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I DELETE \"/api/v1/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the response should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:8"
});
formatter.result({
  "duration": 76557906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/1",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:20"
});
formatter.result({
  "duration": 78643962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 1349830,
  "status": "passed"
});
formatter.after({
  "duration": 99391339,
  "status": "passed"
});
formatter.uri("api/artifact/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about artifacts",
  "id": "artifact-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 799692124,
  "status": "passed"
});
formatter.before({
  "duration": 103551,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching an artifact by ID that exists",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I GET \"/api/v1/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:8"
});
formatter.result({
  "duration": 3356837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 69374173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 175780,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 2508605,
  "status": "passed"
});
formatter.after({
  "duration": 17526657,
  "status": "passed"
});
formatter.after({
  "duration": 40267,
  "status": "passed"
});
formatter.before({
  "duration": 352335184,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Fetching an artifact by ID that doesn\u0027t exist",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I GET \"/api/v1/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 45163986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 180835,
  "status": "passed"
});
formatter.after({
  "duration": 23259265,
  "status": "passed"
});
formatter.before({
  "duration": 283911575,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Fetching an artifact by a non-numeric ID",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-a-non-numeric-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I GET \"/api/v1/artifacts/0xdeadbeef\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the response should be 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 33942597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 142371,
  "status": "passed"
});
formatter.after({
  "duration": 24916374,
  "status": "passed"
});
formatter.before({
  "duration": 294051595,
  "status": "passed"
});
formatter.before({
  "duration": 70129,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Fetching an artifact by the (group, name) tuple",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I GET \"/api/v1/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 44,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:8"
});
formatter.result({
  "duration": 2439773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 79096688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 169351,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 1852418,
  "status": "passed"
});
formatter.after({
  "duration": 20306397,
  "status": "passed"
});
formatter.after({
  "duration": 31538,
  "status": "passed"
});
formatter.before({
  "duration": 297274674,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Fetching an artifact by the (group, name) tuple that doesn\u0027t exist",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "I GET \"/api/v1/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 59409343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 141985,
  "status": "passed"
});
formatter.after({
  "duration": 10142410,
  "status": "passed"
});
formatter.uri("api/artifact/updating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact UPDATE APIs",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to update artifacts",
  "id": "artifact-update-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 269680626,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Attempting to update an artifact",
  "description": "\nArtifacts must be considered immutable to ensure consistency of data from\nDeployDB. We can\u0027t different binaries with the same version, that\u0027s silly.",
  "id": "artifact-update-apis;attempting-to-update-an-artifact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I PATCH \"/api/v1/artifacts/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"version\" : \"9.0.0.0\"\n  }"
  }
});
formatter.step({
  "line": 19,
  "name": "the response should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:8"
});
formatter.result({
  "duration": 2225164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/artifacts/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:28"
});
formatter.result({
  "duration": 34948874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 150853,
  "status": "passed"
});
formatter.after({
  "duration": 27901953,
  "status": "passed"
});
formatter.uri("api/deployment/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new deployments in the system",
  "id": "deployment-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 241101690,
  "status": "passed"
});
formatter.before({
  "duration": 70025,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Creating a new deployment",
  "description": "\nCreating a deployment assumes that we\u0027ve already got an Artifact stored\ninside the DeployDB database",
  "id": "deployment-create-apis;creating-a-new-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I PUT to \"/api/v1/deployments\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 15,
    "value": "  {\n    \"artifactId\" : 1,\n    \"environment\" : \"pre-production\"\n  }"
  }
});
formatter.step({
  "line": 21,
  "name": "the response should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 23,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:8"
});
formatter.result({
  "duration": 4659706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/deployments",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 39221850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 162719,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 3402778,
  "status": "passed"
});
formatter.after({
  "duration": 28878558,
  "status": "passed"
});
formatter.after({
  "duration": 28906,
  "status": "passed"
});
formatter.uri("api/deployment/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about deployments",
  "id": "deployment-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 261443639,
  "status": "passed"
});
formatter.before({
  "duration": 71698,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching a deployment by ID",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I GET \"/api/v1/deployments/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:8"
});
formatter.result({
  "duration": 4980005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 34444301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 158314,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 4337547,
  "status": "passed"
});
formatter.after({
  "duration": 25569016,
  "status": "passed"
});
formatter.after({
  "duration": 34826,
  "status": "passed"
});
formatter.before({
  "duration": 225476947,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Fetching a deployment by ID that doesn\u0027t exist",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I GET \"/api/v1/deployments/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 26572172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 152505,
  "status": "passed"
});
formatter.after({
  "duration": 25671828,
  "status": "passed"
});
formatter.uri("api/deployment/updating.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment UPDATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to update existing deployments in the system",
  "id": "deployment-update-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 289094958,
  "status": "passed"
});
formatter.before({
  "duration": 73263,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Updating a deployment that doesn\u0027t exist",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@freezetime"
    },
    {
      "line": 37,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I PATCH \"/api/v1/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 46,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/v1/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:28"
});
formatter.result({
  "duration": 25702327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 150794,
  "status": "passed"
});
formatter.after({
  "duration": 26195228,
  "status": "passed"
});
formatter.after({
  "duration": 29136,
  "status": "passed"
});
formatter.uri("api/health.feature");
formatter.feature({
  "line": 1,
  "name": "The health endpoint",
  "description": "\nAs a DeployDB administrator\nI should be able to view the health of the application",
  "id": "the-health-endpoint",
  "keyword": "Feature"
});
formatter.before({
  "duration": 223502538,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Fetching health under normal circumstances",
  "description": "\nAssuming the application is up and running properly, the built-in\nhealthcheck endpoint should return information about all the configured\nhealthchecks currently running inside of DeployDB",
  "id": "the-health-endpoint;fetching-health-under-normal-circumstances",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I GET \"/healthcheck\" from the admin app",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 15,
    "value": "{\n  \"deadlocks\" : {\n    \"healthy\" : true\n  },\n  \"sanity\" : {\n    \"healthy\" : true\n  },\n  \"hibernate\" : {\n    \"healthy\" : true\n  },\n  \"webhook\" : {\n    \"healthy\" : true\n  }\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "/healthcheck",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:12"
});
formatter.result({
  "duration": 57627134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:33"
});
formatter.result({
  "duration": 170991,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:41"
});
formatter.result({
  "duration": 1395606,
  "status": "passed"
});
formatter.after({
  "duration": 34682594,
  "status": "passed"
});
});