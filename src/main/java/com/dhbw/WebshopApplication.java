package com.dhbw;


import com.dhbw.domain.user.UserDao;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackageClasses = UserDao.class)
@SpringBootApplication
public class WebshopApplication {

	public static void main(String[] args) {

        SpringApplication.run(WebshopApplication.class, args);

	}
}
