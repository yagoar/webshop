package com.dhbw.api.shoppingOrder;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by yaizagonzalo on 28.02.17.
 */

@Path( "shopping-order/{userId}" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ShoppingOrderEndpoint {


    @PUT
    Response placeOrder(@PathParam("userId") Long userId);
}
