package com.dhbw.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.ShoppingOrderDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;

import java.util.List;

@Component
@Path( "/user" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public class UserEndpoint
{

  @Autowired
  private UserDao userDao;
  @Autowired
  private ShoppingOrderDao shoppingOrderDao;

/*  @POST
  @Path("/login")
  public void login(String email, String password ) {

  }*/

  @PUT
  @Path( "/register" )
  public boolean register(User user) {
    if(userDao.findByEmail(user.getEmail()) == null) {
      userDao.save(user);
      return true;
    }
    else return false;
  }

  @GET
  @Path("{userId}/order-history")
  public List<ShoppingOrder> getOrderHistory(@PathParam("userId") Long userId) {
    return shoppingOrderDao.findByUser(userDao.findOne(userId));
  }
}
