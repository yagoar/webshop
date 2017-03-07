package com.dhbw.api.shoppingCart;

import com.dhbw.domain.item.ItemAndQuantity;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 * Created by jgerle on 07.03.2017.
 */
@Component
@Path( "shopping-cart" )
public class ShoppingCartEndpointImpl implements ShoppingCartEndpoint {
    @Override
    public Response getShoppingCart(Long userId) {
        return null;
    }

    @Override
    public Response addItemToShoppingCart(Long userId, ItemAndQuantity itemAndQuantity) {
        return null;
    }

    @Override
    public Response removeItemFromShoppingCart(Long userId, Long itemId) {
        return null;
    }

    @Override
    public Response updateItemQuantity(Long userId, Long itemId, Integer quantity) {
        return null;
    }
}
