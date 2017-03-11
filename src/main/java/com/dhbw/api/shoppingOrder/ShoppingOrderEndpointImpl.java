package com.dhbw.api.shoppingOrder;

import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.repositories.ShoppingCartDao;
import com.dhbw.domain.item.repositories.ShoppingCartDaoImpl;
import com.dhbw.domain.item.repositories.ShoppingOrderDao;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
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

    @Override
    public String test() {
        return "test";
    }

    @Override
    public Response placeOrder(Long userId) {
        shoppingCartDaoImpl.placeOrder(shoppingCartDao.findByUser(userDao.findOne(userId)));
        return Response.status(Response.Status.OK).entity("Bestellung erfolgt").build();
    }

    @Override
    public Response getOrderHistory(Long userId) {
        List<ShoppingOrder> orders = shoppingOrderDao.findByUser(userDao.findOne(userId));
        return Response.status(Response.Status.OK).entity(orders).type(MediaType.APPLICATION_JSON).build();
    }
}
