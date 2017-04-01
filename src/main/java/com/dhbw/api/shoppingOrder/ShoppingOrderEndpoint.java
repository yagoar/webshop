package com.dhbw.api.shoppingOrder;

import com.dhbw.api.authentication.Secured;

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
     * @return Response object with result of the operation
     */
    @PUT
    @Secured
    @Path("")
    Response placeOrder();

    /**
     * Gets all orders performed by the user as a Pageable object
     *
     * @return Response object containing a List with the order history
     */
    @GET
    @Secured
    @Path("")
    Response getOrderHistory();

    /**
     * Gets all orders performed by the user as a Pageable object
     *
     * @return Response object containing a List with the order history
     */
    @GET
    @Secured
    @Path("{orderId}")
    Response getOrder(@PathParam("orderId") Long orderId);
}
