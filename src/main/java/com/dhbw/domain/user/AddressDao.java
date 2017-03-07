package com.dhbw.domain.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
@Repository
public interface AddressDao extends CrudRepository<Address, Long> {


}
