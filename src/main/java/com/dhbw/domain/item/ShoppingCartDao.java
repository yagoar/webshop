package com.dhbw.domain.item;

import com.dhbw.domain.item.repositories.ShoppingCartDaoCustom;
import com.dhbw.domain.user.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
public interface ShoppingCartDao extends CrudRepository<ShoppingCart, Long>, ShoppingCartDaoCustom {

    ShoppingCart findByUser(User user);
}
