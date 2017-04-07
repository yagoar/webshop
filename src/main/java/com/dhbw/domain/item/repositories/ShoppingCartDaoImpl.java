package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.ItemAndQuantity;
import com.dhbw.domain.item.ShoppingCart;
import com.dhbw.domain.item.ShoppingOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Set;

/**
 * Created by jgerle on 26.02.2017.
 */
@Repository
public class ShoppingCartDaoImpl implements ShoppingCartDaoCustom {

    @Autowired
    private ShoppingOrderDao shoppingOrderDao;
    @Autowired
    private BaseItemDao baseItemDao;

    @Override
    public void placeOrder(ShoppingCart cart) {
        ShoppingOrder order = new ShoppingOrder(cart.getUser(), new Date(), cart.getItems());
        Set<ItemAndQuantity> items = cart.getItems();
        for(ItemAndQuantity item : items) {
            BaseItem it = item.getItem();
            it.setStock(it.getStock() - item.getQuantity());
            baseItemDao.save(it);
        }
        //TODO fix shopping order save
        shoppingOrderDao.save(order);
        cart.getItems().clear();
    }
}
