package com.dhbw.api.authentication;

import com.auth0.jwt.JWT;

import javax.annotation.Priority;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.security.Principal;

/**
 * Created by jgerle on 16.03.2017.
 */

@Secured
@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {

        // Get the HTTP Authorization header from the request
        String authorizationHeader =
                requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        // Check if the HTTP Authorization header is present and formatted correctly
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new NotAuthorizedException("Authorization header must be provided");
        }

        // Extract the token from the HTTP Authorization header
        String token = authorizationHeader.substring("Bearer".length()).trim();


        JWT decoded = JWT.decode(token);
        String u_id = decoded.getClaim("id").asString();
        String userRole = decoded.getClaim("role").asString();

        requestContext.setSecurityContext(new SecurityContext() {

            @Override
            public Principal getUserPrincipal() {

                return () -> u_id;
            }

            @Override
            public boolean isUserInRole(String role) {
                if(userRole.equals(role)) return true;
                else return false;
            }

            @Override
            public boolean isSecure() {
                return false;
            }

            @Override
            public String getAuthenticationScheme() {
                return null;
            }
        });


        try {

            // Validate the token
            validateToken(token);

        } catch (Exception e) {
            requestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED).build());
        }
    }

    private void validateToken(String token) throws Exception {
        JWT decoded = JWT.decode(token);
        if(!decoded.getIssuer().equals("webshop")) throw new Exception("Token source not verified");
    }
}