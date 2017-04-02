package com.dhbw.api.shoppingCart;

import com.dhbw.api.authentication.Secured;
import com.dhbw.domain.item.BaseItem;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ShoppingCartEndpoint {

    /**
     * Gets current shopping cart of the user
     *
     * @return Response object with shopping cart
     */
    @GET
    @Secured
    @Path( "" )
    Response getShoppingCart();

    /**
     * Gets current shopping cart of the user
     *
     * @return Response object with shopping cart
     */
    @GET
    @Secured
    @Path( "count" )
    Response getItemCountShoppingCart();

    /**
     * Adds a new item to the shopping cart
     *
     * @param item BaseItem object which contains an item
     * @return Response object with result of the operation
     */
    @POST
    @Secured
    @Path( "" )
    Response addItemToShoppingCart(BaseItem item);

    /**
     * Deletes an item from the shopping cart
     *
     * @param itemId id of the item
     * @return Response object with result of the operation
     */
    @DELETE
    @Secured
    @Path("{itemId}")
    Response removeItemFromShoppingCart(@PathParam("itemId") Long itemId);

    /**
     * Updates the quantity of an item already in the shopping cart
     *
     * @param itemId id of the item to be updated
     * @param quantity new item quantity
     * @return Response object with result of the operation
     */
    @POST
    @Secured
    @Path("{itemId}")
    Response updateItemQuantity(@PathParam("itemId") Long itemId,
                                Integer quantity);
}
