package com.dhbw.api.items;

import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.Category;
import com.dhbw.domain.item.ItemPage;
import com.dhbw.domain.item.repositories.BaseItemDao;
import com.dhbw.domain.item.repositories.CategoryDao;
import com.fasterxml.jackson.databind.deser.Deserializers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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
    public Response getAllCategories() {
        List<Category> categories = categoryDao.findAll();
        return Response.status(Response.Status.OK).entity(categories).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response getAllItems() {
        List<BaseItem> items = baseItemDao.findAll();
        return Response.status(Response.Status.OK).entity(items).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response getItemPage(Long categoryId) {

        Category parentCategory = categoryDao.findOne(categoryId);
        List<BaseItem> itemList = new ArrayList<>();
        ItemPage itemPage = getChildCategories(parentCategory, itemList);

        return Response.status(Response.Status.OK).entity(itemPage).build();
    }

    private ItemPage getChildCategories(Category parentCategory, List<BaseItem> itemList) {

        parentCategory.setChildrenCategories(new ArrayList<>());
        List<Category> childCategories = categoryDao.getChildCategories(parentCategory);
        itemList.addAll(baseItemDao.findByCategory(parentCategory));

        if (childCategories.size() > 0) {
            parentCategory.setChildrenCategories(childCategories);
            for (Category c : childCategories) {
                getChildCategories(c, itemList);
            }
        }

        return new ItemPage(parentCategory, itemList);
    }

    @Override
    public Response getItemDetails(Long itemId) {
        return Response.status(Response.Status.OK).entity(baseItemDao.findOne(itemId)).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    @Override
    public Response getImage(Long itemId) {
        return Response.status(Response.Status.OK).entity(baseItemDao.findOne(itemId).getImage()).build();
    }
}
