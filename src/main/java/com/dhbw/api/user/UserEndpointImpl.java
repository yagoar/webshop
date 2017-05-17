package com.dhbw.api.user;

import com.dhbw.domain.item.ShoppingCart;
import com.dhbw.domain.item.repositories.ShoppingCartDao;
import com.dhbw.domain.user.*;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.security.Principal;
import java.util.Set;

@Component
@Path( "user" )
public class UserEndpointImpl implements UserEndpoint {

    @Autowired
    private UserDao userDao;
    @Autowired
    private AddressDao addressDao;
    @Autowired
    private ShoppingCartDao shoppingCartDao;

    @Context
    SecurityContext securityContext;

    @Override
    public Response register(User user) {
        if (userDao.findByEmail(user.getEmail()) == null) {
            user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
            ShoppingCart cart = new ShoppingCart();
            cart.setUser(user);
            userDao.save(user);
            shoppingCartDao.save(cart);
            return Response.ok().entity("User erfolgreich angelegt. Sie können sich jetzt mit Ihrer Email-Adresse und Ihrem Passwort anmelden").build();
        } else return Response.status(Response.Status.BAD_REQUEST)
                .entity("Benutzer existiert bereits").build();
    }

    @Override
    public Response resetPassword(ResetPassword resetPassword) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        if (resetPassword.getNewPassword() == null ||  ("").equals(resetPassword.getNewPassword())) return Response.status(Response.Status.BAD_REQUEST)
                .entity("Neues Passwort darf nicht leer sein").build();
        else if (BCrypt.checkpw(resetPassword.getPreviousPassword(), userDao.findByEmail(resetPassword.getEmail()).getPassword())) {
                    User user = userDao.findByEmail(resetPassword.getEmail());
                    user.setPassword(BCrypt.hashpw(resetPassword.getNewPassword(), BCrypt.gensalt()));
                    userDao.save(user);
                    return Response.ok().entity("Passwort erfolgreich geändert").build();
        }
        else return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Altes Passwort falsch").build();
    }

    @Override
    public Response resetEmail(ResetPassword resetPassword) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        User user = userDao.findByEmail(resetPassword.getEmail());
        user.setEmail(resetPassword.getNewEmail());
        userDao.save(user);
        return Response.ok().entity("E-Mail erfolgreich geändert.").build();
    }

    @Override
    public Response getUserInfo() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        return Response.status(Response.Status.OK).entity(userDao.findOne(userId)).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response updateAddress(Address newAddress, String addressType) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        User user = userDao.findOne(userId);
        Address address = null;
        if(("billing").equals(addressType)){
            address = addressDao.findOne(user.getBillingAddress().getA_id());
        } else if (("shipping").equals(addressType)) {
            address = addressDao.findOne(user.getShippingAddress().getA_id());
        }
        if(address != null) {
            address.updateFields(newAddress);
            addressDao.save(address);
            return Response.ok().build();
        } else {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Adresse nicht gefunden").build();
        }
    }

}
