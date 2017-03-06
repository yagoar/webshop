package com.dhbw;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by jgerle on 06.03.2017.
 */
@Configuration
@ComponentScan({"com.dhbw.api","com.dhbw.domain.**"})
public class TestConfig {
}
