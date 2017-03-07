package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
@Repository
public interface CategoryDao extends JpaRepository<Category, Long> {

    Category findByName(String name);
}
