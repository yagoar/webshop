package com.dhbw.api.admin;

import com.dhbw.domain.item.BaseItem;
import com.dhbw.domain.item.Category;
import com.dhbw.domain.item.MultipleItem;
import com.dhbw.domain.item.SingleItem;
import com.dhbw.domain.item.repositories.BaseItemDao;
import com.dhbw.domain.item.repositories.CategoryDao;
import com.dhbw.domain.user.User;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by jgerle on 19.03.2017.
 */
@Component
@Path("admin")
public class AdminEndpointImpl implements AdminEndpoint {

    @Autowired
    BaseItemDao baseItemDao;
    @Autowired
    CategoryDao categoryDao;
    @Autowired
    UserDao userDao;
    @Context
    SecurityContext securityContext;

    @Override
    public Response createItem(SingleItem item) {
        if (securityContext.isUserInRole("ADMIN")) {
            BaseItem toBeCreated = item;
            toBeCreated.setDtype("single");
            baseItemDao.save(toBeCreated);
            return Response.ok("Item erfolgreich angelegt").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response updateItem(Long itemId, SingleItem item) {
        if (securityContext.isUserInRole("ADMIN")) {
            BaseItem old = baseItemDao.findOne(itemId);
            old.setDeleted(true);
            baseItemDao.save(old);
            item.setDtype("single");
            baseItemDao.save(item);
            return Response.ok("Artikel erfolgreich geändert").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response deleteItem(Long itemId) {
        if (securityContext.isUserInRole("ADMIN")) {
            BaseItem toBeDeleted = baseItemDao.findOne(itemId);
            toBeDeleted.setDeleted(true);
            baseItemDao.save(toBeDeleted);
            return Response.ok("Artikel erfolgreich gelöscht").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response createCategory(Category category) {
        if (securityContext.isUserInRole("ADMIN")) {
            categoryDao.save(category);
            return Response.ok("Kategorie erfolgreich angelegt").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response updateCategory(Long categoryId, Category category) {
        if (securityContext.isUserInRole("ADMIN")) {
            Category old = categoryDao.findOne(categoryId);
            old.setName(category.getName());
            old.setDescription(category.getDescription());
            old.setParentCategory(category.getParentCategory());
            categoryDao.save(old);
            return Response.ok("Kategorie erfolgreich geändert").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response deleteCategory(Long categoryId) {
        if (securityContext.isUserInRole("ADMIN")) {
            Category toBeDeleted = categoryDao.findOne(categoryId);
            toBeDeleted.setDeleted(true);
            categoryDao.save(toBeDeleted);
            return Response.ok("Kategorie erfolgreich gelöscht").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response createSet(MultipleItem itemSet) {
        if (securityContext.isUserInRole("ADMIN")) {
            BaseItem set = itemSet;
            set.setDtype("multiple");
            baseItemDao.save(itemSet);
            return Response.ok("Set erfolgreich angelegt").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response updateItemSet(Long itemSetId, MultipleItem itemSet) {
        if (securityContext.isUserInRole("ADMIN")) {
            MultipleItem old = (MultipleItem) baseItemDao.findOne(itemSetId);
            old.setDeleted(true);
            baseItemDao.save(old);
            baseItemDao.save(itemSet);
            return Response.ok("Set erfolgreich geändert").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response deleteSet(Long itemSetId) {
        if (securityContext.isUserInRole("ADMIN")) {
            BaseItem toBeDeleted = baseItemDao.findOne(itemSetId);
            toBeDeleted.setDeleted(true);
            baseItemDao.save(toBeDeleted);
            return Response.ok("Set erfolgreich gelöscht").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response addItemToSet(Long itemSetId, Long itemId) {
        if (securityContext.isUserInRole("ADMIN")) {
            MultipleItem set = (MultipleItem) baseItemDao.findOne(itemSetId);
            List<SingleItem> items = new ArrayList<>();
            if (set.getItems() != null) {
                items.addAll(set.getItems());
            }
            items.add((SingleItem) baseItemDao.findOne(itemId));
            set.setItems(items);
            baseItemDao.save(set);
            return Response.ok("Artikel wurde dem Set hinzugefügt").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response removeItemFromSet(Long itemSetId, Long itemId) {
        if (securityContext.isUserInRole("ADMIN")) {
            MultipleItem set = (MultipleItem) baseItemDao.findOne(itemSetId);
            List<SingleItem> items = new ArrayList<>();
            if (set.getItems() != null) {
                items.addAll(set.getItems());
            }
            items.remove(baseItemDao.findOne(itemId));
            set.setItems(items);
            baseItemDao.save(set);
            return Response.ok("Artikel wurde vom Set entfernt").build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response makeUserAdmin(String email) {
        if (securityContext.isUserInRole("ADMIN")) {
            User user = userDao.findByEmail(email);
            if(user.isAdmin()) {
                user.setAdmin(false);
                userDao.save(user);
                return Response.ok("User ist jetzt nicht mehr Admin").build();
            }
            else {
                user.setAdmin(true);
                userDao.save(user);
                return Response.ok("User ist jetzt Admin").build();
            }
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }

    @Override
    public Response getUser() {
        if (securityContext.isUserInRole("ADMIN")) {
            return Response.ok(userDao.findAll()).type(MediaType.APPLICATION_JSON_TYPE).build();
        } else return Response.status(Response.Status.FORBIDDEN).build();
    }
}
