package com.dhbw.api.user;

import com.dhbw.domain.user.*;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.security.Principal;
import java.util.Set;

@Component
@Path( "user" )
public class UserEndpointImpl implements UserEndpoint {

    @Autowired
    private UserDao userDao;

    @Context
    SecurityContext securityContext;

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
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        if (resetPassword.getNewPassword() == null ||  ("").equals(resetPassword.getNewPassword())) return Response.status(Response.Status.BAD_REQUEST)
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
    public Response getUserInfo() {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        return Response.status(Response.Status.OK).entity(userDao.findOne(userId)).build();
    }

    @Override
    public Response updateBillingAddress(Address billingAddr) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        Set<Address> addresses = userDao.findOne(userId).getAddresses();
        for(Address address : addresses) {
            if(address.getAddressType().equals(AddressType.BILLING)) {
                address = billingAddr;
                address.setAddressType(AddressType.BILLING);
            }
        }
        userDao.findOne(userId).setAddresses(addresses);
        userDao.save(userDao.findOne(userId));
        return Response.ok().build();
    }

    @Override
    public Response updateShippingAddress(Address shippingAddr) {
        Principal principal = securityContext.getUserPrincipal();
        Long userId = Long.valueOf(principal.getName());
        Set<Address> addresses = userDao.findOne(userId).getAddresses();
        for(Address address : addresses) {
            if(address.getAddressType().equals(AddressType.SHIPPING)) {
                address = shippingAddr;
                address.setAddressType(AddressType.SHIPPING);
            }
        }
        userDao.findOne(userId).setAddresses(addresses);
        userDao.save(userDao.findOne(userId));
        return Response.ok().build();
    }

}
