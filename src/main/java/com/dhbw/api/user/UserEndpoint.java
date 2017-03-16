package com.dhbw.api.user;

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
     * Logs in an already registered user
     *
     * @param user User object with login credentials
     * @return Response object with result of the operation
     */
    @PUT
    @Path( "login" )
    Response login(User user);

    /**
     * Changes the password of the user
     *
     * @param userId id of the user
     * @param resetPassword ResetPassword object, containing old and new password
     * @return Response object with result of the operation
     */
    @POST
    @Path( "{userId}/profile/password" )
    Response resetPassword(@PathParam("userId") Long userId, ResetPassword resetPassword);

    /**
     * Gets the user information (name, email, pw, addresses...)
     *
     * @param userId id of the user
     * @return Response object containing a User object with all the information
     */
    @GET
    @Path("{userId}/profile")
    Response getUserInfo(@PathParam("userId") Long userId);

    /**
     * Updates the user's billing address using in an order
     *
     * @param userId id of the user
     * @param billingAddr Address object with new address information
     * @return Response object with result of the operation
     */
    @POST
    @Path( "{userId}/profile/billing" )
    Response updateBillingAddress(@PathParam("userId") Long userId, Address billingAddr);

    /**
     * Updates the user's shipping address using in an order
     *
     * @param userId id of the user
     * @param shippingAddr Address object with new address information
     * @return Response object with result of the operation
     */
    @POST
    @Path( "{userId}/profile/shipping" )
    Response updateShippingAddress(@PathParam("userId") Long userId, Address shippingAddr);

}
