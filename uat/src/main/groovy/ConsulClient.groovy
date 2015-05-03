package uat

import dropwizardintegtest.IntegrationRestApiClient

import javax.ws.rs.core.Response
import javax.ws.rs.core.GenericType

class ConsulClient {

    IntegrationRestApiClient restApiClient = new IntegrationRestApiClient()

   List<String> getDeploydbHosts() {

       restApiClient.port = 8500
       String path = "/v1/health/service/deploydb?passing"
       Response response = restApiClient.getFromPath(path, false)
       List<String>  hosts = new ArrayList()

       List<ServiceHealth> serviceHealthList = response.readEntity(new GenericType<List<ServiceHealth>>(){})
       serviceHealthList.each {
           hosts << it.node.address + ":" + it.service.port
       }

       return hosts
   }
}