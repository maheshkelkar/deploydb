package uat.consul

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize

import java.util.ArrayList
import java.util.List

/**
 * Consul ServiceHealth check model. Used in UAT's service discovery of deploydb
 */
@JsonIgnoreProperties(ignoreUnknown = true)
class ServiceHealth {

    @JsonProperty("Node")
    private Node node

    @JsonProperty("Service")
    private Service service

    @JsonProperty("Checks")
    @JsonDeserialize(as = ArrayList.class, contentAs = HealthCheck.class)
    private List<HealthCheck> checks

    ServiceHealth() { }
}
