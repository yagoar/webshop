package com.dhbw.api.items;

import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.Category;
import com.dhbw.domain.item.repositories.BaseItemDao;
import com.dhbw.domain.item.repositories.CategoryDao;
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
    public Response getCategory(Long categoryId) {
        Category parentCategory = categoryDao.findOne(categoryId);
        parentCategory = getChildCategories(parentCategory);
        return Response.status(Response.Status.OK).entity(parentCategory).build();
    }

    private Category getChildCategories(Category parentCategory) {
        parentCategory.setChildrenCategories(new ArrayList<>());
        List<Category> childCategories = categoryDao.getChildCategories(parentCategory);
        if (childCategories.size() == 0) {
            return parentCategory;
        } else {
            parentCategory.setChildrenCategories(childCategories);
            for (Category c : childCategories) {
                getChildCategories(c);
            }
        }
        return parentCategory;
    }

    @Override
    public Response getItemsInCategory(Long categoryId) {
        Category parentCategory = categoryDao.findOne(categoryId);
        List<BaseItem> all = baseItemDao.findByCategory(parentCategory);
        parentCategory = getChildCategories(parentCategory);
        parentCategory = allChildItems(parentCategory);
        List<Category> cats = parentCategory.getChildrenCategories();
        for(Category cat : cats) {
            if(cat.getChildrenItems() != null) {
                all.addAll(cat.getChildrenItems());
            }
        }
        return Response.status(Response.Status.OK).entity(all).type(MediaType.APPLICATION_JSON_TYPE).build();
    }

    private Category allChildItems(Category parentCategory) {
        parentCategory.setChildrenItems(baseItemDao.findByCategory(parentCategory));
        parentCategory = getChildCategories(parentCategory);
        List<Category> allChildren = parentCategory.getChildrenCategories();
        if(allChildren.isEmpty()) {
            return parentCategory;
        }
        else {
            for(Category cat : allChildren) {
                List<BaseItem> catItems = baseItemDao.findByCategory(cat);
                if(catItems != null) {
                    parentCategory.setChildrenItems(catItems);
                }
                allChildItems(cat);
            }
        }
        return parentCategory;
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
