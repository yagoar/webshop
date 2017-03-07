package com.dhbw.api.items;

import com.dhbw.domain.item.repositories.CategoryDao;
import com.dhbw.domain.item.ItemFilter;
import com.dhbw.domain.item.repositories.ShoppingOrderDao;
import com.dhbw.domain.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;

@Component
@Path( "items" )
public class ItemsEndpointImpl implements ItemsEndpoint {

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
    public Response getItemsInCategory(Long categoryId, @DefaultValue("0") int page, @DefaultValue("20") int size, List<String> sort, ItemFilter filter) {
        return null;
    }

    @Override
    public Response getItemDetails(Long itemId) {
        return null;
    }


}
