package com.dhbw.api.shoppingCart;

import com.dhbw.domain.item.ItemAndQuantity;
import com.dhbw.domain.item.ShoppingCart;
import com.dhbw.domain.item.repositories.BaseItemDao;
import com.dhbw.domain.item.repositories.ShoppingCartDao;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.security.Principal;

/**
 * Created by jgerle on 07.03.2017.
 */
@Component
@Path("shopping-cart")
public class ShoppingCartEndpointImpl implements ShoppingCartEndpoint {

    @Autowired
    ShoppingCartDao shoppingCartDao;
    @Autowired
    UserDao userDao;
    @Autowired
    BaseItemDao baseItemDao;

    @Context
    SecurityContext securityContext;

    @Override
    public String test() {
        return "test";
    }

    @Override
    public Response getShoppingCart(Long userId) {
        Principal principal = securityContext.getUserPrincipal();
        String email = principal.getName();
        Long tokenUserId = userDao.findByEmail(email).getU_id();
        if (!userId.equals(tokenUserId)) {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Fremder Warenkorb").build();
        } else
            return Response.status(Response.Status.OK).entity(shoppingCartDao.findByUser(userDao.findOne(userId))).type(MediaType.APPLICATION_JSON).build();
    }

    @Override
    public Response addItemToShoppingCart(Long userId, ItemAndQuantity itemAndQuantity) {
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.addItemToCart(itemAndQuantity.getItem(), itemAndQuantity.getQuantity());
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Artikel wurde dem Warenkorb hinzugefügt").build();
    }

    @Override
    public Response removeItemFromShoppingCart(Long userId, Long itemId) {
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.removeItemFromCart(baseItemDao.findOne(itemId));
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Artikel wurde aus dem Warenkorb entfernt").build();
    }

    @Override
    public Response updateItemQuantity(Long userId, Long itemId, Integer quantity) {
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.reduceQuantityOfItemInCart(baseItemDao.findOne(itemId), quantity);
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Menge angepasst").build();
    }
}
