package com.dhbw.config;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;
import com.dhbw.api.UserEndpoint;

@Component
@ApplicationPath( "api/v1")
public class JerseyConfig extends ResourceConfig
{
  public JerseyConfig() {
    registerEndpoints();
  }

  private void registerEndpoints() {
    register( UserEndpoint.class );
  }
}