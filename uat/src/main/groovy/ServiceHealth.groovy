package deploydb

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.annotation.JsonDeserialize

import java.util.ArrayList
import java.util.List

@JsonIgnoreProperties(ignoreUnknown = true)
public class ServiceHealth {

    @JsonProperty("Node")
    private Node node

    @JsonProperty("Service")
    private Service service

    @JsonProperty("Checks")
    @JsonDeserialize(as = ArrayList.class, contentAs = HealthCheck.class)
    private List<HealthCheck> checks

    ServiceHealth() { }
}
