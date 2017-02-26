package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.ShoppingCart;

/**
 * Created by jgerle on 26.02.2017.
 */
public interface ShoppingCartDaoCustom {

    void placeOrder(ShoppingCart cart);
}
