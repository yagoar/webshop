package com.dhbw.domain.item;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by jgerle on 01.03.2017.
 */
@Transactional
public interface BaseItemDao extends JpaRepository<BaseItem, Long> {

    BaseItem findByName(String name);
    List<BaseItem> findByPriceLessThan(Double price);
    List<BaseItem> findByDtype(String dtype);
    List<BaseItem> findByCategory(Category category);

}
