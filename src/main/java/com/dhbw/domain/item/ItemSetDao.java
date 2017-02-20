package com.dhbw.domain.item;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
public interface ItemSetDao extends CrudRepository<ItemSet, Long> {

    ItemSet findByName(String name);
    List<ItemSet> findByCategory(Category category);
    List<ItemSet> findByPriceLessThan(double price);


}
