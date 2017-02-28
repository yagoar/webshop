package com.dhbw.api.user;

import com.dhbw.domain.user.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path( "user" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface UserEndpoint {

    @GET
    @Path( "test" )
    String test();

    @PUT
    @Path( "register" )
    Response register(User user);

    @POST
    @Path( "login" )
    Response login(User user);

    @GET
    @Path("{userId}/order-history")
    Response getOrderHistory(@PathParam("userId") Long userId,
                             @QueryParam("page") @DefaultValue("0") int page,
                             @QueryParam("size") @DefaultValue("20") int size);

}
