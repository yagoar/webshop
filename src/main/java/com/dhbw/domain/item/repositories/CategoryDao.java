package com.dhbw.domain.item.repositories;

import com.dhbw.domain.item.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
@Repository
public interface CategoryDao extends JpaRepository<Category, Long> {

    Category findByName(String name);
    List<Category> findByParentCategory(Category category);

    @Query("SELECT c FROM Category c WHERE c.parentCategory IS NULL")
    List<Category> getParentCategories();

    @Query("SELECT c FROM Category c WHERE c.parentCategory = ?1")
    List<Category> getChildCategories(Category category);

    List<Category> findAll();
}
