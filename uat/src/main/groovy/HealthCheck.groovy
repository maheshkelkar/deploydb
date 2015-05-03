package uat

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
public class HealthCheck {

    @JsonProperty("Node")
    private String node

    @JsonProperty("CheckID")
    private String checkId

    @JsonProperty("Name")
    private String name

    @JsonProperty("Status")
    private String status

    @JsonProperty("Notes")
    private String notes

    @JsonProperty("Output")
    private String output

    @JsonProperty("ServiceID")
    private String serviceId

    @JsonProperty("ServiceName")
    private String serviceName

    HealthCheck() { }
}
