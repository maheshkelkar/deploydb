package uat.consul

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

/**
 * Consul Service check model. Used in UAT's service discovery of deploydb
 */
@JsonIgnoreProperties(ignoreUnknown = true)
class Service {

    @JsonProperty("ID")
    private String id

    @JsonProperty("Service")
    private String service

    @JsonProperty("Tags")
    private String[] tags

    @JsonProperty("Port")
    private int port

    Service() { }
}
