package com.dhbw.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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

  @POST
  @Path("/login")
  public void login( String email, String password ) {

  }

  @PUT
  @Path( "/register" )
  public void register(  ) {

  }

  @GET
  @Path("/order-history")
  public void getOrderHistory() {

  }
}
