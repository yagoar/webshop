package com.dhbw.config;

import com.dhbw.api.items.ItemsEndpointImpl;
import com.dhbw.api.user.UserEndpointImpl;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath( "api/v1")
public class JerseyConfig extends ResourceConfig
{
  public JerseyConfig() {
    registerClasses(UserEndpointImpl.class, ItemsEndpointImpl.class);
  }

}