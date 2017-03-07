package com.dhbw.api.shoppingOrder;

import org.springframework.stereotype.Component;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 * Created by jgerle on 07.03.2017.
 */
@Component
@Path( "shopping-order" )
public class ShoppingOrderEndpointImpl implements ShoppingOrderEndpoint {
    @Override
    public Response placeOrder(Long userId) {
        return null;
    }

    @Override
    public Response getOrderHistory(Long userId, @DefaultValue("0") int page, @DefaultValue("20") int size) {
        return null;
    }
}
