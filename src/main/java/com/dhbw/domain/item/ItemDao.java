package com.dhbw.domain.item;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
public interface ItemDao extends JpaRepository<Item, Long> {

    Page<Item> findByCategory(Category category, Pageable pageable);
    List<Item> findByBrand(String brand);
    List<Item> findByColor(String color);
    List<Item> findByPriceLessThan(double price);
    Item findByName(String name);

}
