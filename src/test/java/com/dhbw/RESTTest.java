package com.dhbw;


import com.dhbw.config.JerseyConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import javax.ws.rs.core.Application;

/**
 * Created by jgerle on 06.03.2017.
 */
public class RESTTest extends JerseyTest {

    @Override
    protected Application configure() {
        ApplicationContext context = new AnnotationConfigApplicationContext(TestConfig.class);
        return new JerseyConfig()
                .property("contextConfig", context);
    }

    @Test
    public void RegisterUserTest() {

        String test = target("test").request().get(String.class);
        Assert.assertEquals(test, "test");
    }


}
