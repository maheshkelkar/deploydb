package deploydb.resources

import com.codahale.metrics.annotation.Timed
import deploydb.WorkFlow
import io.dropwizard.jersey.params.IntParam
import io.dropwizard.jersey.params.LongParam
import io.dropwizard.hibernate.UnitOfWork
import javax.ws.rs.Consumes
import javax.ws.rs.DefaultValue
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.PathParam
import javax.ws.rs.QueryParam
import javax.ws.rs.WebApplicationException
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response
import deploydb.models.Flow


@Path("/api/flows")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class FlowResource {
    private final WorkFlow workFlow

    FlowResource(WorkFlow workFlow) {
        this.workFlow = workFlow
    }

    @GET
    @Path("{id}")
    @UnitOfWork
    @Timed(name = "get-requests")
    Flow byIdentifier(@PathParam("id") LongParam flowId) {
        Flow flow = this.workFlow.flowDAO.get(flowId.get())

        if (flow == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND)
        }

        return flow
    }


    /**
     * Returns all Flow objects (paginate info is optional)
     */
    @GET
    @UnitOfWork
    @Timed(name = "get-requests")
    List<Flow> getAll(@QueryParam("pageNumber") @DefaultValue("0") IntParam pageNumber,
                      @QueryParam("perPageSize") @DefaultValue("20") deploydb.ModelPageSizeParam
                                    perPageSize) {
        /**
         * Fetch flow by page
         */
        List<Flow> flowTable = this.workFlow.flowDAO.getByPage(
                pageNumber.get(), perPageSize.get())
        if (flowTable.isEmpty()) {
            throw new WebApplicationException(Response.Status.NOT_FOUND)
        }

        return flowTable
    }

}
