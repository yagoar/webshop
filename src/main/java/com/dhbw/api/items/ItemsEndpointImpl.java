package com.dhbw.api.items;

import com.dhbw.domain.item.repositories.BaseItemDao;
import com.dhbw.domain.item.repositories.CategoryDao;
import com.dhbw.domain.item.ItemFilter;
import com.dhbw.domain.item.repositories.ShoppingOrderDao;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import javax.swing.*;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;

@Component
@Path( "items" )
public class ItemsEndpointImpl implements ItemsEndpoint {

    @Autowired
    private BaseItemDao baseItemDao;
    @Autowired
    private CategoryDao categoryDao;

    @Override
    public String test() {
        return "test";
    }

    @Override
    public Response getItemsInCategory(Long categoryId) {
        return Response.status(Response.Status.OK).entity(baseItemDao.findByCategory(categoryDao.findOne(categoryId))).build();
    }

    @Override
    public Response getItemDetails(Long itemId) {
        return Response.status(Response.Status.OK).entity(baseItemDao.findOne(itemId)).build();
    }


}
