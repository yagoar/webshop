package com.dhbw;

import com.dhbw.domain.user.User;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static io.restassured.RestAssured.given;

/**
 * Created by jgerle on 06.03.2017.
 */

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = WebshopApplication.class)
public class RESTTest {

    @LocalServerPort
    private int port;

    @Before
    public void setUp() {
        RestAssured.port = this.port;
        RestAssured.basePath = "/api/v1/";
        RestAssured.baseURI = "http://localhost";
    }

    @Test
    public void LoginUserTest() {

        User testUser = new User();
        testUser.setEmail("peter@lustig.de");
        testUser.setPassword("peterspasswort");

        String login = given()
                .contentType(ContentType.JSON)
                .body(testUser)
                .when()
                .put("user/login")
                .then()
                .statusCode(200)
                .extract().response().asString();

        Assert.assertEquals("Login erfolgreich", login);
    }

    @Test
    public void ShoppingOrderTest() {
        String placedOrder = given()
                .contentType(ContentType.JSON)
                .body(5L)
                .when()
                .put("shopping-order/5")
                .then()
                .statusCode(200)
                .extract().response().asString();

        Assert.assertEquals("Bestellung erfolgt", placedOrder);
    }


}
