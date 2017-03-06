package com.dhbw.api.user;

import com.dhbw.domain.item.ShoppingOrder;
import com.dhbw.domain.item.ShoppingOrderDao;
import com.dhbw.domain.user.ResetPassword;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.Response;

@Component
public class UserEndpointImpl implements UserEndpoint {

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
        if (userDao.findByEmail(user.getEmail()) == null) {
            user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
            userDao.save(user);
            return Response.ok().build();
        } else return Response.status(Response.Status.BAD_REQUEST)
                .entity("Benutzer existiert bereits").build();
    }

    @Override
    public Response login(User user) {
        User u = userDao.findByEmail(user.getEmail());
        Response response = Response.status(Response.Status.UNAUTHORIZED)
                .entity("Email oder Passwort falsch").build();

        if (u != null) {
            if (BCrypt.checkpw(user.getPassword(), u.getPassword())) {
                return Response.status(Response.Status.OK).entity("Login erfolgreich").build();
            }
        }
        return response;
    }

    @Override
    public Response resetPassword(ResetPassword resetPassword) {
        if (resetPassword.getNewPassword() == null || resetPassword.getNewPassword() != "") return Response.status(Response.Status.BAD_REQUEST)
                .entity("Neues Passwort darf nicht leer sein").build();
        else if (BCrypt.checkpw(resetPassword.getPreviousPassword(), userDao.findByEmail(resetPassword.getEmail()).getPassword())) {
                    User user = userDao.findByEmail(resetPassword.getEmail());
                    user.setPassword(BCrypt.hashpw(resetPassword.getNewPassword(), BCrypt.gensalt()));
                    userDao.save(user);
                    return Response.ok().build();
        }
        else return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Email oder Passwort falsch").build();
    }

    @Override
    public Response getOrderHistory(Long userId, int page, int size) {

        Page<ShoppingOrder> orderHistory = shoppingOrderDao.findByUser(userDao.findOne(userId), new PageRequest(page, size));
        return Response.ok().entity(orderHistory).build();

    }

}
