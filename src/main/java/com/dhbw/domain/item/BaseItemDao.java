package com.dhbw.domain.item;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 01.03.2017.
 */
@Transactional
public interface BaseItemDao extends JpaRepository<BaseItem, Long> {

    BaseItem findByName(String name);
}
