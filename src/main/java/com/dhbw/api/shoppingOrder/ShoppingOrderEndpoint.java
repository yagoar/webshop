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
     * @param page selected page
     * @param size orders per page
     * @return Response object containing a Pageable object with the order history
     */
    @GET
    @Path("{userId}/history")
    Response getOrderHistory(@PathParam("userId") Long userId,
                             @QueryParam("page") @DefaultValue("0") int page,
                             @QueryParam("size") @DefaultValue("20") int size);
}
