package com.dhbw.api.shoppingCart;

import com.dhbw.domain.item.ItemAndQuantity;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path( "shopping-cart/{userId}" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ShoppingCartEndpoint {

    /**
     * Gets current shopping cart of the user
     *
     * @param userId id of the user
     * @return Response object with shopping cart
     */
    @GET
    Response getShoppingCart(@PathParam("userId") Long userId);

    /**
     * Adds a new item with a quantity to the shopping cart
     *
     * @param userId id of the user
     * @param itemAndQuantity ItemAndQuantity object which contains an item and the desired quantity
     * @return Response object with result of the operation
     */
    @POST
    Response addItemToShoppingCart(@PathParam("userId") Long userId,
                                   ItemAndQuantity itemAndQuantity);

    /**
     * Deletes an item from the shopping cart
     *
     * @param userId id of the user
     * @param itemId id of the item
     * @return Response object with result of the operation
     */
    @DELETE
    @Path("{itemId}")
    Response removeItemFromShoppingCart(@PathParam("userId") Long userId,
                                        @PathParam("itemId") Long itemId);

    /**
     * Updates the quantity of an item already in the shopping cart
     *
     * @param userId id of the user
     * @param itemId id of the item to be updated
     * @param quantity new item quantity
     * @return Response object with result of the operation
     */
    @POST
    @Path("{itemId}")
    Response updateItemQuantity(@PathParam("userId") Long userId,
                                @PathParam("itemId") Long itemId,
                                Integer quantity);
}
