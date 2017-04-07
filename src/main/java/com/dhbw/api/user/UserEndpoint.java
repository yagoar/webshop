package com.dhbw.api.user;

import com.dhbw.api.authentication.Secured;
import com.dhbw.domain.user.Address;
import com.dhbw.domain.user.ResetPassword;
import com.dhbw.domain.user.User;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface UserEndpoint {

    /**
     * Registers a new user in the database.
     * If email is already in the database, an error is thrown
     *
     * @param user User object with information of new user
     * @return Response object with result of the operation
     */
    @PUT
    @Path( "register" )
    Response register(User user);

    /**
     * Changes the password of the user
     *
     * @param resetPassword ResetPassword object, containing old and new password
     * @return Response object with result of the operation
     */
    @POST
    @Secured
    @Path( "profile/password" )
    @Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
    Response resetPassword(ResetPassword resetPassword);

    /**
     * Gets the user information (name, email, pw, addresses...)
     *
     * @return Response object containing a User object with all the information
     */
    @GET
    @Secured
    @Path("profile")
    Response getUserInfo();

    /**
     * Updates the user's billing / shipping address using in an order
     *
     * @param newAddress Address object with new address information
     * @return Response object with result of the operation
     */
    @POST
    @Secured
    @Path( "profile/{addressType}" )
    Response updateAddress(Address newAddress, @PathParam("addressType") String addressType);

}
