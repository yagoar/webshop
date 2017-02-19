package com.dhbw;

import com.dhbw.domain.item.*;
import com.dhbw.domain.user.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;

/**
 * Created by jgerle on 03.12.2016.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class DBTest {

    @Autowired
    private UserDao userDao;
    @Autowired
    private AddressDao addressDao;
    @Autowired
    private CategoryDao categoryDao;
    @Autowired
    private ItemDao itemDao;
    @Autowired
    private ItemSetDao itemSetDao;
    @Autowired
    private ShoppingOrderDao orderDao;
    @Autowired
    private ShoppingCartDao shoppingCartDao;
    @Autowired
    private ShoppingOrderDao shoppingOrderDao;

    @Test
    public void UserAndAddress() {

        try {
            User testuser = new User();
            testuser.setFirstName("Test");
            testuser.setLastName("User");
            testuser.setEmail("testy@test.de");
            testuser.setAdmin(true);
            testuser.setDateOfBirth(new Date());
            testuser.setGender(Gender.MALE);
            testuser.setPassword("mypwd");

            Address address = new Address();
            address.setCity("Stuttgart");
            address.setStreet("Rotebühlplatz");
            address.setNo("42");
            address.setAddressType(AddressType.BILLING);
            address.setZip(71180);

            List<Address> addressList = new ArrayList<>();
            addressList.add(address);

            testuser.setAddresses(addressList);

            userDao.save(testuser);
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }

    @Test
    public void ItemAndCategory() {

        Item item1 = new Item();
        item1.setName("item1");
        item1.setDescription("First test item");
        item1.setPrice(1.99);

        Category category1 = new Category();
        category1.setName("Category1");
        category1.setDescription("Test category");

        item1.setCategory(category1);

        itemDao.save(item1);
    }

    @Test
    public void ItemSetTest() {

        ItemSet itemSet = new ItemSet();
        List<Item> itemList = new ArrayList<>();
        itemSet.setName("TestItemSet");
        itemSet.setDescription("ItemSet for testing");
        itemSet.setPrice(19.99);

        Category itemSetCategory = new Category();
        itemSetCategory.setName("ItemSetCategory");
        Category itemCategory = new Category();
        itemCategory.setName("ItemCategory");
        itemSet.setCategory(itemSetCategory);

        Item item = new Item();
        item.setCategory(itemCategory);
        item.setName("ItemListItem");
        itemList.add(item);

        itemSet.setItems(itemList);

        itemSetDao.save(itemSet);
    }

    @Test
    public void ShoppingCartTest() {

        ShoppingCart cart = new ShoppingCart();
        User user = new User();
        user.setLastName("ShoppingCartUser");
        cart.setUser(user);
        Map<Item, Integer> itemsAndQuantity = new HashMap<>();
        Item item = new Item();
        itemDao.save(item);
        itemsAndQuantity.put(item, 3);

        cart.setItemsAndQuantity(itemsAndQuantity);

        shoppingCartDao.save(cart);
    }
}

