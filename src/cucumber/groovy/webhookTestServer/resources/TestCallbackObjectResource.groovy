package webhookTestServer.resources

import io.dropwizard.hibernate.UnitOfWork
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import webhookTestServer.models.ReceivedWebhookObject
import webhookTestServer.models.ResponseWebhookObject

import javax.servlet.http.HttpServletRequest
import javax.ws.rs.Consumes
import javax.ws.rs.POST
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.WebApplicationException
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Context
import javax.ws.rs.core.Response

/**
 *
 */
@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TestCallBackobjectResource {

    private final Logger logger = LoggerFactory.getLogger(TestCallBackobjectResource.class)
    private final ReceivedWebhookObject receivedWebhookObject
    private final ResponseWebhookObject responseWebhookObject
    private boolean validObject = false

    TestCallBackobjectResource(ReceivedWebhookObject receivedWebhookObject,
                               ResponseWebhookObject responseWebhookObject) {
        this.receivedWebhookObject = receivedWebhookObject
        this.responseWebhookObject = responseWebhookObject
    }

    @POST
    @Path("{subResources:.*}")
    @UnitOfWork
    Response createWebhookResource(@Context HttpServletRequest request, String messageBody) {

        String requestUri = request.getRequestURI()

        println("requestUri: ${requestUri}")

        /*
         * If the received request URI is not same as configured, then we throw BAD_REQUEST
         */
        if (receivedWebhookObject.configuredUrl != requestUri){
            throw new WebApplicationException(Response.Status.BAD_REQUEST)
        }

        println("saving message body : ${messageBody}")

        /*
         * save the received message body
         */
        receivedWebhookObject.setRequestMessageBody(messageBody)

        /*
         * If the payload is valid, then we respond with configured data and response code
         */
        this.validObject = true
        return Response.status(responseWebhookObject.responseCode.toInteger())
                       .entity(responseWebhookObject.responseData)
                       .sleep(responseWebhookObject.delayBeforeResponseInSecs)
    }

}
