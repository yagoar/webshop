package com.dhbw.user;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by Stone on 01.12.2016.
 */
@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    private String Email;

    private Date DateOfBirth;

    private boolean IsAdmin;
}
