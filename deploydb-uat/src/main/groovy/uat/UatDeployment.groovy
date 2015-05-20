package uat

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

/**
 *  For UAT tests we need to deserialize the Deployment model.
 *  We can't use the deploydb models because of gradle sub projects dependencies issue.
 *  Ideally we should have a top level "api" directory for deploydb that has models in them.
 *
 *  Class to access the Deployment returned by deploydb REST API
 */
@JsonIgnoreProperties(ignoreUnknown = true)
/*
 * We only need id property to run UAT tests, so ignore the rest
 */
public class UatDeployment {

    @JsonProperty
    long id

    UatDeployment() { }
}