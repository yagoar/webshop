package com.dhbw.api.items;

import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.Category;
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
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Component
@Path("items")
public class ItemsEndpointImpl implements ItemsEndpoint {

    @Autowired
    private BaseItemDao baseItemDao;
    @Autowired
    private CategoryDao categoryDao;

    @Override
    public Response getParentCategories() {
        List<Category> parentCategories = categoryDao.getParentCategories();
        return Response.status(Response.Status.OK).entity(parentCategories).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response getCategory(Long categoryId) {
        return Response.status(Response.Status.OK).entity(categoryDao.findOne(categoryId)).build();
    }

    @Override
    public Response getItemsInCategory(Long categoryId) {
        List<BaseItem> ownItems = baseItemDao.findByCategory(categoryDao.findOne(categoryId));
        List<Category> children = categoryDao.findByParentCategory(categoryDao.findOne(categoryId));
        List<BaseItem> childrensItems = new ArrayList<>();
        if (!children.isEmpty()) {
            for (Category category : children) {
                childrensItems.addAll(baseItemDao.findByCategory(category));
            }
            if (!childrensItems.isEmpty()) {
                ownItems.addAll(childrensItems);
            }
        }
        return Response.status(Response.Status.OK).entity(ownItems).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response getItemDetails(Long itemId) {
        return Response.status(Response.Status.OK).entity(baseItemDao.findOne(itemId)).type(MediaType.APPLICATION_JSON_TYPE).build();
    }


}
