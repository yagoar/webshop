package com.dhbw;


import com.dhbw.domain.item.*;
import com.dhbw.domain.user.AddressDao;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Created by jgerle on 20.02.2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class DaoTest {

    @Autowired
    private UserDao userDao;
    @Autowired
    private AddressDao addressDao;
    @Autowired
    private CategoryDao categoryDao;
    @Autowired
    private ShoppingOrderDao orderDao;
    @Autowired
    private ShoppingCartDao shoppingCartDao;
    @Autowired
    private ShoppingOrderDao shoppingOrderDao;
    @Autowired
    private BaseItemDao baseItemDao;


    @Test
    public void UserAndCartDaoTest() {

        User user = userDao.findByEmail("peter@lustig.de");
        ShoppingCart cart = shoppingCartDao.findByUser(user);
        BaseItem it = baseItemDao.findByName("Noodles grau");
        cart.addItemToCart(it, 5);
        shoppingCartDao.save(cart);
        Assert.assertTrue(cart.isItemInCart(it));
        cart.removeItemFromCart(it);
        shoppingCartDao.save(cart);
        Assert.assertFalse(cart.isItemInCart(it));
        BaseItem it2 = baseItemDao.findByName("Kissenbezug grau");
        cart.addItemToCart(it2, 1);
        shoppingCartDao.save(cart);
        Assert.assertTrue(cart.isItemInCart(it2));
        cart.removeItemFromCart(it2);
        Assert.assertFalse(cart.isItemInCart(it2));
    }

    @Test
    public void BaseItemDaoTest() {

        List<BaseItem> itemlist = baseItemDao.findByPriceLessThan(20.00);
        for(BaseItem item : itemlist) {
            item.setPrice(21.99);
            baseItemDao.save(item);
        }
        BaseItem cheap = baseItemDao.findByName("Kissenbezug blau/grün");
        cheap.setPrice(9.99);
        baseItemDao.save(cheap);
        Assert.assertEquals(1, baseItemDao.findByPriceLessThan(20.00).size());

        List<BaseItem> singleList = baseItemDao.findByDtype("single");
        for(BaseItem single : singleList) {
            Assert.assertTrue(single.getDtype().equals("single"));
        }

        List<BaseItem> categoryList = baseItemDao.findByCategory(categoryDao.findByName("Häkeln"));
        for(BaseItem item : categoryList) {
            Assert.assertTrue(item.getCategory().getName().equals("Häkeln"));
        }
    }

    @Test
    public void ShoppingOrderDaoTest() {

        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findByEmail("monty@springfield.com"));
        cart.addItemToCart(baseItemDao.findOne(1L), 1);
        cart.addItemToCart(baseItemDao.findOne(9L), 1);
        shoppingCartDao.placeOrder(cart);
        shoppingCartDao.save(cart);
        Assert.assertTrue(cart.getItems().isEmpty());
    }
}
