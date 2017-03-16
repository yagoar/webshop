package com.dhbw.api.authentication;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.dhbw.domain.user.Credentials;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.UnsupportedEncodingException;

/**
 * Created by jgerle on 16.03.2017.
 */
@Path("/authentication")
public class AuthenticationEndpoint {

    @Autowired
    UserDao userDao;

    @POST
    @Produces("application/json")
    @Consumes("application/json")
    public Response authenticateUser(Credentials credentials) {

        try {

            // Authenticate the user using the credentials provided
            String username = credentials.getUsername();
            String password = credentials.getPassword();

            authenticate(username, password);

            // Issue a token for the user
            String token = issueToken(username);

            // Return the token on the response
            return Response.ok(token).build();

        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }

    private void authenticate(String username, String password) throws Exception {
        User user = userDao.findByEmail(username);

        if(user != null) {
            if(!BCrypt.checkpw(password, user.getPassword())) {
                throw new Exception("Authentication failed");
            }
        }
        else throw new Exception("User not found");
    }

    private String issueToken(String username) {

        User user = userDao.findByEmail(username);
        String role;
        if(user.isAdmin()) role = "ADMIN";
        else role = "USER";

        String token = null;
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("id", user.getU_id().toString())
                    .withClaim("role", role)
                    .sign(algorithm);
        } catch (UnsupportedEncodingException | JWTCreationException exception){
            exception.printStackTrace();
        }
        return token;
    }
}
