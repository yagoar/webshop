package com.dhbw.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;

@Component
@Path( "/user" )
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public class UserEndpoint
{

  @Autowired
  private UserDao userDao;

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

/*  @GET
  @Path("/order-history")
  public void getOrderHistory() {

  }*/
}
