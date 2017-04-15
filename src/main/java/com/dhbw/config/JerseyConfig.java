package com.dhbw.config;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@Configuration
@ApplicationPath( "api/v1")
public class JerseyConfig extends ResourceConfig
{

  public JerseyConfig() {

    packages("com.dhbw.api.*");
    //register(MultiPartFeature.class);
  }

}