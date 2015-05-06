package deploydb

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
public class Service {

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
