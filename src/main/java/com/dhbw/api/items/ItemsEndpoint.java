package com.dhbw.api.items;

import com.dhbw.domain.item.ItemFilter;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;


@Consumes( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
@Produces( { MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML } )
public interface ItemsEndpoint {

    @GET
    @Path( "test" )
    String test();

    /**
     * Gets items of a category with a selected page
     * Request body contains ItemFilter object, which values are used to perform a query with filters
     *
     * @param categoryId id of the selected category, items in child categories should appear too
     * @param page selected page, defaults to 0 (first page)
     * @param size items per page
     * @param sort list with two strings, the column to sort by and the direction (asc/desc)
     * @param filter ItemFilter object with filter information
     * @return Response object with items from the query (pageable)
     */
    @GET
    @Path("category/{categoryId}")
    Response getItemsInCategory(@PathParam("categoryId")  Long categoryId,
                              @QueryParam("page")       @DefaultValue("0") int page,
                              @QueryParam("size")       @DefaultValue("20") int size,
                              @QueryParam("sort")       List<String> sort,
                              ItemFilter filter);

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
