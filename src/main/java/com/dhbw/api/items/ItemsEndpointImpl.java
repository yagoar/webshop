package com.dhbw.api.items;

import com.dhbw.domain.item.CategoryDao;
import com.dhbw.domain.item.Item;
import com.dhbw.domain.item.ItemDao;
import com.dhbw.domain.item.ShoppingOrderDao;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.core.Response;
import java.util.List;

@Component
public class ItemsEndpointImpl implements ItemsEndpoint {

    @Autowired
    private ItemDao itemDao;

    @Autowired
    private CategoryDao categoryDao;

    @Autowired
    private UserDao userDao;
    @Autowired
    private ShoppingOrderDao shoppingOrderDao;

    @Override
    public String test() {
        return "test";
    }


    @Override
    public String getItemsInCategory(String category, int page, int size) {

        //Page<Item> items = itemDao.findByCategory(categoryDao.findByName(category), new PageRequest(page,size));
        //return Response.ok().entity(str).build();
        return "hallo";
    }

    @Override
    public Response getItemDetails(Long itemId) {

        return null;
    }

    @Override
    public Response getItemsWithFilters(List<String> filters) {
        return null;
    }
}
