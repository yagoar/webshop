package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.ShoppingCart;
import com.dhbw.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
@Repository
public interface ShoppingCartDao extends JpaRepository<ShoppingCart, Long>, ShoppingCartDaoCustom {

    ShoppingCart findByUser(User user);
}
