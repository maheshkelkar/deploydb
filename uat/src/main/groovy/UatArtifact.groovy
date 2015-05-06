package deploydb

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
public class UatArtifact {

    @JsonProperty
    long id

    UatArtifact() { }
}