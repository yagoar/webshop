package com.dhbw.api.user;

import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.ShoppingOrderDao;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import java.util.List;

@Component
public class UserEndpointImpl implements UserEndpoint
{

  @Autowired
  private UserDao userDao;
  @Autowired
  private ShoppingOrderDao shoppingOrderDao;

  @Override
  public String test() {
    return "test";
  }

  @Override
  public Response register(User user) {
    if(userDao.findByEmail(user.getEmail()) == null) {
      userDao.save(user);
      return Response.ok().build();
    }
    else return Response.status(Response.Status.BAD_REQUEST)
            .entity("Benutzer existiert bereits").build();
  }

  @Override
  public Response login(User user) {
    return null;
  }

  @Override
  public Response getOrderHistory(Long userId, int page, int size) {

    Page<ShoppingOrder> orderHistory = shoppingOrderDao.findByUser(userDao.findOne(userId), new PageRequest(page,size));
    return Response.ok().entity(orderHistory).build();

  }

}
