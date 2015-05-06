package deploydb

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
public class Node {

    @JsonProperty("Node")
    private String node

    @JsonProperty("Address")
    private String address

    Node() { }
}
