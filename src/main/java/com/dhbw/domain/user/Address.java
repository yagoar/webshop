package com.dhbw.domain.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by jgerle on 05.12.2016.
 */
@Entity
@XmlRootElement
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long a_id;

    private String firstName;

    private String lastName;

    private Gender gender;

    private String city;

    private String streetNo;

    private int zip;

    private String country;

    public Long getA_id() {
        return a_id;
    }

    public void setA_id(Long a_id) {
        this.a_id = a_id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getStreetNo() {
        return streetNo;
    }

    public void setStreetNo(String streetNo) {
        this.streetNo = streetNo;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void updateFields(Address newAddress) {
        this.firstName = newAddress.getFirstName();
        this.lastName = newAddress.getLastName();
        this.gender = newAddress.getGender();
        this.city = newAddress.getCity();
        this.streetNo = newAddress.getStreetNo();
        this.zip = newAddress.getZip();
        this.country = newAddress.getCountry();
    }
}
