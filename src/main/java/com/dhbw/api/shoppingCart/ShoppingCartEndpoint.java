package com.dhbw.api.shoppingCart;

import com.dhbw.domain.item.ItemAndQuantity;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path( "shopping-cart/{userId}" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ShoppingCartEndpoint {

    @GET
    Response getShoppingCart(@PathParam("userId") Long userId);

    @POST
    Response addItemToShoppingCart(@PathParam("userId") Long userId,
                                   ItemAndQuantity itemAndQuantity);

    @DELETE
    @Path("{itemId}")
    Response removeItemFromShoppingCart(@PathParam("userId") Long userId,
                                        @PathParam("itemId") Long itemId);

    @POST
    @Path("{itemId}")
    Response updateItemQuantity(@PathParam("userId") Long userId,
                                @PathParam("itemId") Long itemId,
                                Integer quantity);
}
