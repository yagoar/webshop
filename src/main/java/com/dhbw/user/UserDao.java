package com.dhbw.user;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by Stone on 05.12.2016.
 */
@Transactional
public interface UserDao extends CrudRepository<User, Long> {

    public User findByEmail(String email);
}
