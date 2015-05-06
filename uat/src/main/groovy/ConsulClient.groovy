package deploydb

import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.Response
import javax.ws.rs.core.GenericType

class ConsulClient {

    IntegrationRestApiClient restApiClient = new IntegrationRestApiClient()

    def getDeploydbHosts() {

       restApiClient.port = 8500
       String path = "/v1/health/service/deploydb?passing"
       Response response = restApiClient.getFromPath(path, false)
       def hosts = [:]

       List<ServiceHealth> serviceHealthList = response.readEntity(new GenericType<List<ServiceHealth>>(){})
       serviceHealthList.each {
           hosts[it.node.address] = it.service.port
       }

       hosts
   }
}
