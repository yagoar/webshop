package com.dhbw.api.user;

import com.dhbw.domain.user.ResetPassword;
import com.dhbw.domain.user.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface UserEndpoint {

    @GET
    @Path( "test" )
    String test();

    @PUT
    @Path( "register" )
    Response register(User user);

    @PUT
    @Path( "login" )
    Response login(User user);

    @GET
    @Path( "{userId}/profile" )
    Response getProfileInfo(@PathParam("userId") Long userId);

    @POST
    @Path( "{userId}/profile/password" )
    Response resetPassword(@PathParam("userId") Long userId, ResetPassword resetPassword);

    @GET
    @Path("{userId}/order-history")
    Response getOrderHistory(@PathParam("userId") Long userId,
                             @QueryParam("page") @DefaultValue("0") int page,
                             @QueryParam("size") @DefaultValue("20") int size);

}
