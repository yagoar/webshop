package com.dhbw.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface UserDao extends JpaRepository<User, Long> {

    User findByEmail(String email);
    List<User> findByIsAdminTrue();
}
