package com.dhbw.user;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by Stone on 05.12.2016.
 */
public interface UserDao extends CrudRepository<User, Long> {

    public User findByEmail(String email);
}
