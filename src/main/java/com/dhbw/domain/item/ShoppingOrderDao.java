package com.dhbw.domain.item;

import com.dhbw.domain.user.User;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
public interface ShoppingOrderDao extends CrudRepository<ShoppingOrder, Long> {

    List<ShoppingOrder> findByUser(User user);


}
