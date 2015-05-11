package uat

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

/**
 *  For UAT tests we need to deserialize the Artifact model.
 *  We can't use the deploydb models because of gradle sub projects dependencies issue.
 *  Ideally we should have a top level "api" directory for deploydb that has models in them.
 *
 *  Class to access the Artifact returned by deploydb REST API
 */
@JsonIgnoreProperties(ignoreUnknown = true)
/*
 * We only need id property to run UAT tests, so ignore the rest
 */
public class UatArtifact {

    @JsonProperty
    long id

    UatArtifact() { }
}