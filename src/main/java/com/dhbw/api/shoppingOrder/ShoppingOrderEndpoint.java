package com.dhbw.api.shoppingOrder;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by yaizagonzalo on 28.02.17.
 */

@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ShoppingOrderEndpoint {

    @GET
    @Path( "test" )
    String test();

    /**
     * Places an order using the current state of the user's shopping cart and addresses
     *
     * @param userId id of the user
     * @return Response object with result of the operation
     */
    @PUT
    @Path( "{userId}")
    Response placeOrder(@PathParam("userId") Long userId);

    /**
     * Gets all orders performed by the user as a Pageable object
     *
     * @param userId id of the user
     * @return Response object containing a List with the order history
     */
    @GET
    @Path("{userId}")
    Response getOrderHistory(@PathParam("userId") Long userId);
}
