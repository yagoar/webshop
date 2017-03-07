package com.dhbw.api.items;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;


@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ItemsEndpoint {

    @GET
    @Path( "test" )
    String test();

    @GET
    @Path("category/{category}")
    String getItemsInCategory(@PathParam("category") String category,
                              @QueryParam("page") @DefaultValue("0") int page,
                              @QueryParam("size") @DefaultValue("20") int size,
                              @QueryParam("filter") List<String> filter);

    @GET
    @Path("details/{itemId}")
    Response getItemDetails(@PathParam("itemId") Long itemId);

    @GET
    @Path("filter")
    Response getItemsWithFilters(@QueryParam("f") List<String> filters);

}
