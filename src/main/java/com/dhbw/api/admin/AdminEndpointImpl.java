package com.dhbw.api.admin;

import com.dhbw.domain.item.BaseItem;
import org.springframework.stereotype.Component;

import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 * Created by jgerle on 19.03.2017.
 */
@Component
@Path("admin")
public class AdminEndpointImpl implements AdminEndpoint {

    @Override
    public Response createItem(BaseItem item) {
        return null;
    }

    @Override
    public Response updateItem(BaseItem item) {
        return null;
    }

    @Override
    public Response deleteItem(Long itemId) {
        return null;
    }

    @Override
    public Response createSet(BaseItem itemSet) {
        return null;
    }

    @Override
    public Response updateItemSet(BaseItem itemSet) {
        return null;
    }

    @Override
    public Response deleteSet(Long itemSetId) {
        return null;
    }

    @Override
    public Response addItemToSet(Long ItemSetId, Long itemId) {
        return null;
    }

    @Override
    public Response removeItemFromSet(Long ItemSetId, Long itemId) {
        return null;
    }
}
