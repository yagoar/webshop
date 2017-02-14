package com.dhbw;

import com.dhbw.domain.item.*;
import com.dhbw.domain.user.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private OrderDao orderDao;

    @Autowired
    private ShoppingCartDao shoppingCartDao;


    @Test
    public void TestUser() {

        try
        {
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

        }
        catch (Exception e)
        {
            System.err.println(e.getMessage());
        }

    }

    @Test
    public void TestItems() {

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
}