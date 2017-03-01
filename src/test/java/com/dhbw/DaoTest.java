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
    public void ItemSetDaoTest() {

/*        List<ItemSet> setList = itemSetDao.findByPriceLessThan(20.00);
        for(ItemSet set : setList) {
            set.setPrice(21.99);
            itemSetDao.save(set);
        }
        ItemSet cheap = itemSetDao.findByName("Kissenbezug blau/grün");
        cheap.setPrice(9.99);
        itemSetDao.save(cheap);
        Assert.assertEquals(1, itemSetDao.findByPriceLessThan(20.00).size());

        ItemSet green = itemSetDao.findByName("Husse grün");
        Assert.assertTrue(green.getItems().contains(itemDao.findByName("Noodles grün")));*/
    }

    @Test
    public void ShoppingOrderDaoTest() {

/*        ShoppingCart cart = shoppingCartDao.findByUser(userDao.findByEmail("monty@springfield.com"));
        cart.addItemToCart(itemDao.findOne(1L), 1);
        cart.addItemSetToCart(itemSetDao.findOne(1L), 1);
        shoppingCartDao.placeOrder(cart);
        shoppingCartDao.save(cart);
        Assert.assertTrue(cart.getItemsAndQuantity().isEmpty());
        Assert.assertTrue(cart.getItemSetsAndQuantity().isEmpty());*/

    }
}
