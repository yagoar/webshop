package com.dhbw.config;

import com.dhbw.api.admin.AdminEndpointImpl;
import com.dhbw.api.authentication.AuthenticationEndpoint;
import com.dhbw.api.authentication.AuthenticationFilter;
import com.dhbw.api.fileUpload.UploadFileService;
import com.dhbw.api.items.ItemsEndpointImpl;
import com.dhbw.api.shoppingCart.ShoppingCartEndpointImpl;
import com.dhbw.api.shoppingOrder.ShoppingOrderEndpointImpl;
import com.dhbw.api.user.UserEndpointImpl;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@Configuration
@ApplicationPath( "api/v1")
public class JerseyConfig extends ResourceConfig
{
  public JerseyConfig() {
    //Register all REST Endpoints - always use implementation, not interface
    register(AdminEndpointImpl.class);
    register(AuthenticationEndpoint.class);
    register(ItemsEndpointImpl.class);
    register(UploadFileService.class);
    register(ShoppingCartEndpointImpl.class);
    register(ShoppingOrderEndpointImpl.class);
    register(UserEndpointImpl.class);

    //Register providers
    register(AuthenticationFilter.class);

    register(MultiPartFeature.class);
  }
}