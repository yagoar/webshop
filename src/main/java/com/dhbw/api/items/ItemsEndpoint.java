package com.dhbw.api.items;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ItemsEndpoint {

    /**
     * Gets all parent categories (not children of other categories)
     *
     * @return Response object with categories (only names needed, no children or description)
     */
    @GET
    @Path("categories")
    Response getParentCategories();

    /**
     * Gets a category by its id
     *
     * @param categoryId id of the selected category, items in child categories should appear too
     * @return Response object with the category object
     */
    @GET
    @Path("category/{categoryId}")
    Response getCategory(@PathParam("categoryId")  Long categoryId);

    /**
     * Gets items of a category with a selected page
     * Request body contains ItemFilter object, which values are used to perform a query with filters
     *
     * @param categoryId id of the selected category, items in child categories should appear too
     * @return Response object with items from the query
     */
    @GET
    @Path("{categoryId}")
    Response getItemsInCategory(@PathParam("categoryId")  Long categoryId);



    /**
     * Gets detail information of an item
     *
     * @param itemId id of the item
     * @return Response object with the item details
     */
    @GET
    @Path("details/{itemId}")
    Response getItemDetails(@PathParam("itemId") Long itemId);

}
