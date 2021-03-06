package com.dhbw.api.shoppingOrder;

import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.repositories.ShoppingCartDao;
import com.dhbw.domain.item.repositories.ShoppingCartDaoImpl;
import com.dhbw.domain.item.repositories.ShoppingOrderDao;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.security.Principal;
import java.util.List;

/**
 * Created by jgerle on 07.03.2017.
 */
@Component
@Path( "shopping-order" )
public class ShoppingOrderEndpointImpl implements ShoppingOrderEndpoint {

    @Autowired
    ShoppingOrderDao shoppingOrderDao;
    @Autowired
    ShoppingCartDaoImpl shoppingCartDaoImpl;
    @Autowired
    ShoppingCartDao shoppingCartDao;
    @Autowired
    UserDao userDao;

    @Context
    SecurityContext securityContext;

    @Override
    public Response placeOrder() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        shoppingCartDaoImpl.placeOrder(shoppingCartDao.findByUser(userDao.findOne(userId)));
        return Response.status(Response.Status.OK).entity("Bestellung erfolgt").build();
    }

    @Override
    public Response getOrderHistory() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        List<ShoppingOrder> orders = shoppingOrderDao.findByUser(userDao.findOne(userId));
        return Response.status(Response.Status.OK).entity(orders).type(MediaType.APPLICATION_JSON).build();
    }

    @Override
    public Response getOrder(Long orderId) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        ShoppingOrder order = shoppingOrderDao.findBySoId(orderId);
        if(order != null && (userId).equals(order.getUser().getU_id())) {
            return Response.status(Response.Status.OK).entity(order).type(MediaType.APPLICATION_JSON).build();
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }


}
