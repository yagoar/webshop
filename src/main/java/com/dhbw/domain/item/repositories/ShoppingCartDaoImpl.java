package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.ShoppingCart;
import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.ShoppingOrderDao;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

/**
 * Created by jgerle on 26.02.2017.
 */
public class ShoppingCartDaoImpl implements ShoppingCartDaoCustom {

    @Autowired
    private ShoppingOrderDao shoppingOrderDao;

    @Override
    public void placeOrder(ShoppingCart cart) {
        ShoppingOrder order = new ShoppingOrder(cart.getUser(), new Date(), cart.getItems());
        cart.setShoppingOrder(order);
        shoppingOrderDao.save(order);
        cart.getItems().clear();
    }
}
