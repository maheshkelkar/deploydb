package uat.consul

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

/**
 * Consul Node model. Used in UAT's service discovery of deploydb
 */
@JsonIgnoreProperties(ignoreUnknown = true)
class Node {

    @JsonProperty("Node")
    private String node

    @JsonProperty("Address")
    private String address

    Node() { }
}
