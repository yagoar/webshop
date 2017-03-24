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
    public Response getShoppingCart() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        return Response.status(Response.Status.OK).entity(shoppingCartDao.findByUser(userDao.findOne(userId))).type(MediaType.APPLICATION_JSON).build();
    }

    @Override
    public Response getItemCountShoppingCart() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        return Response.ok(shoppingCartDao.findByUser(userDao.findOne(userId)).getItems().size()).type(MediaType.APPLICATION_JSON).build();
    }

    @Override
    public Response addItemToShoppingCart(ItemAndQuantity itemAndQuantity) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.addItemToCart(itemAndQuantity.getItem(), itemAndQuantity.getQuantity());
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Artikel wurde dem Warenkorb hinzugefügt").build();
    }

    @Override
    public Response removeItemFromShoppingCart(Long itemId) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.removeItemFromCart(baseItemDao.findOne(itemId));
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Artikel wurde aus dem Warenkorb entfernt").build();
    }

    @Override
    public Response updateItemQuantity(Long itemId, Integer quantity) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findOne(userId));
        cart.updateQuantityOfItemInCart(baseItemDao.findOne(itemId), quantity);
        shoppingCartDao.save(cart);
        return Response.status(Response.Status.OK).entity("Menge angepasst").build();
    }
}
