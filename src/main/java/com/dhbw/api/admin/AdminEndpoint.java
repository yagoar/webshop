package com.dhbw.api.admin;

import com.dhbw.api.authentication.Secured;
import com.dhbw.domain.item.BaseItem;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by jgerle on 19.03.2017.
 */
@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface AdminEndpoint {

    /**
     * Creates a new Item
     * Request body contains BaseItem object
     *
     * @param item Item to be created
     * @return Response object with BaseItem object
     */
    @PUT
    @Secured
    @Path("item")
    Response createItem(BaseItem item);


    /**
     * Updates an existing Item
     * Request body contains BaseItem object
     *
     * @param item Item to be updated
     * @return Response object with updated BaseItem object
     */
    @POST
    @Secured
    @Path("item")
    Response updateItem(BaseItem item);


    /**
     * Deletes an existing Item
     * Request body contains BaseItem object
     *
     * @param itemId Item to be deleted
     * @return Response object with response of the operation
     */
    @DELETE
    @Secured
    @Path("item/{itemId}")
    Response deleteItem(@PathParam("itemId") Long itemId);


    /**
     * Creates a new ItemSet
     * Request body contains BaseItem object
     *
     * @param itemSet ItemSet to be created
     * @return Response object with ItemSet object (BaseItem)
     */
    @PUT
    @Secured
    @Path("itemSet")
    Response createSet(BaseItem itemSet);


    /**
     * Updates an existing ItemSet
     * Request body contains BaseItem object
     *
     * @param itemSet Item to be updated
     * @return Response object with updated BaseItem object
     */
    @POST
    @Secured
    @Path("itemSet")
    Response updateItemSet(BaseItem itemSet);


    /**
     * Deletes an existing ItemSet
     * Request body contains BaseItem object
     *
     * @param itemSetId ItemSet to be deleted
     * @return Response object with response of the operation
     */
    @DELETE
    @Secured
    @Path("itemSet/{itemSetId}")
    Response deleteSet(@PathParam("itemSetId") Long itemSetId);


    /**
     * Adds an existing Item to an existing ItemSet
     * Request body contains BaseItem object
     *
     * @param itemId Item to be added
     * @param ItemSetId Id of ItemSet
     * @return Response object with response of the operation
     */
    @POST
    @Secured
    @Path("itemSet/{ItemSetId}/{itemId}")
    Response addItemToSet(@PathParam("ItemSetId") Long ItemSetId, @PathParam("itemId") Long itemId);


    /**
     * Removes an Item from an an existing ItemSet
     * Request body contains BaseItem object
     *
     * @param itemId Item to be removed
     * @param ItemSetId Id of ItemSet
     * @return Response object with response of the operation
     */
    @DELETE
    @Secured
    @Path("itemSet/{ItemSetId}/{itemId}")
    Response removeItemFromSet(@PathParam("ItemSetId") Long ItemSetId, @PathParam("itemId") Long itemId);


}
