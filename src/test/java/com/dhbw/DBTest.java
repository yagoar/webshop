package com.dhbw;

import com.dhbw.user.Gender;
import com.dhbw.user.User;
import com.dhbw.user.UserDao;
import com.mysql.jdbc.Connection;
import org.hibernate.Transaction;
import org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.sql.DataSource;
import java.util.Date;

/**
 * Created by Stone on 03.12.2016.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class DBTest {

    @Autowired
    public UserDao userDao;

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



            userDao.save(testuser);

        }
        catch (Exception e)
        {
            System.err.println(e.getMessage());
        }

    }
}
