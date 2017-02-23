package com.dhbw;

import com.dhbw.domain.item.*;
import com.dhbw.domain.user.AddressDao;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

/**
 * Created by jgerle on 20.02.2017.
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class DaoTest {

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
    public void UserDaoTest() {

        User user = new User();
        user.setLastName("Lustig");
        user.setFirstName("Peter");
        String generic = (new Date()).toString();
        user.setEmail(generic + "@lustig.de");
        userDao.save(user);

        Assert.assertEquals(user.getId(), userDao.findByEmail(generic + "@lustig.de").getId());
    }

}
