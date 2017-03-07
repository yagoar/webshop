package com.dhbw.domain.item;

import com.dhbw.domain.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
@Repository
public interface ShoppingOrderDao extends JpaRepository<ShoppingOrder, Long> {

    Page<ShoppingOrder> findByUser(User user, Pageable pageable);

}
