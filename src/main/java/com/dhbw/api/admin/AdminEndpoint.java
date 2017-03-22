package com.dhbw.api.admin;

import com.dhbw.api.authentication.Secured;
import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.Category;
import com.dhbw.domain.item.MultipleItem;

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
     * @return Response object with the result of the operation
     */
    @PUT
    @Secured
    @Path("item")
    Response createItem(BaseItem item);


    /**
     * Updates an existing Item
     * Request body contains BaseItem object
     *
     * @param itemId Id of item to be updated
     * @param item BaseItem object with updated information
     * @return Response object with the result of the operation
     */
    @POST
    @Secured
    @Path("item/{itemId}")
    Response updateItem(@PathParam("itemId") Long itemId, BaseItem item);


    /**
     * Deletes an existing Item
     *
     * @param itemId Item to be deleted
     * @return Response object with the result of the operation
     */
    @DELETE
    @Secured
    @Path("item/{itemId}")
    Response deleteItem(@PathParam("itemId") Long itemId);

    /**
     * Creates a new Category
     * Request body contains Category object
     *
     * @param category Category to be created
     * @return Response object with the result of the operation
     */
    @PUT
    @Secured
    @Path("category")
    Response createCategory(Category category);


    /**
     * Updates an existing Category
     * Request body contains Category object
     *
     * @param categoryId Id of category to be updated
     * @param category Category object with updated information
     * @return Response object with the result of the operation
     */
    @POST
    @Secured
    @Path("category/{categoryId}")
    Response updateCategory(@PathParam("categoryId") Long categoryId, Category category);


    /**
     * Deletes an existing Category
     *
     * @param categoryId Item to be deleted
     * @return Response object with the result of the operation
     */
    @DELETE
    @Secured
    @Path("category/{categoryId}")
    Response deleteCategory(@PathParam("categoryId") Long categoryId);


    /**
     * Creates a new ItemSet
     * Request body contains BaseItem object
     *
     * @param itemSet ItemSet to be created
     * @return Response object with the result of the operation
     */
    @PUT
    @Secured
    @Path("itemSet")
    Response createSet(BaseItem itemSet);


    /**
     * Updates an existing ItemSet
     * Request body contains BaseItem object
     *
     * @param itemSetId Item to be updated
     * @param item Updated BaseItem object
     * @return Response object with the result of the operation
     */
    @POST
    @Secured
    @Path("itemSet/{itemSetId}")
    Response updateItemSet(@PathParam("itemSetId") Long itemSetId, MultipleItem item);


    /**
     * Deletes an existing ItemSet
     *
     * @param itemSetId ItemSet to be deleted
     * @return Response object with the result of the operation
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
     * @return Response object with the result of the operation
     */
    @POST
    @Secured
    @Path("itemSet/{ItemSetId}/{itemId}")
    Response addItemToSet(@PathParam("ItemSetId") Long ItemSetId, @PathParam("itemId") Long itemId);


    /**
     * Removes an Item from an an existing ItemSet
     *
     * @param itemId Item to be removed
     * @param ItemSetId Id of ItemSet
     * @return Response object with the result of the operation
     */
    @DELETE
    @Secured
    @Path("itemSet/{ItemSetId}/{itemId}")
    Response removeItemFromSet(@PathParam("ItemSetId") Long ItemSetId, @PathParam("itemId") Long itemId);


}
