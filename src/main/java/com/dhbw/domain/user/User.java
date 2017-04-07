package com.dhbw.domain.user;


import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Created by jgerle on 01.12.2016.
 */
@Entity
@XmlRootElement
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long u_id;

    private String email;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date dateOfBirth;

    private String lastName;

    private String firstName;

    private String password;

    private Gender gender;

    private boolean isAdmin;

    @OneToOne(fetch = FetchType.EAGER, targetEntity = Address.class, cascade = CascadeType.ALL)
    private Address shippingAddress;

    @OneToOne(fetch = FetchType.EAGER, targetEntity = Address.class, cascade = CascadeType.ALL)
    private Address billingAddress;


    public Long getU_id() {
        return u_id;
    }

    public void setU_id(Long u_id) {
        this.u_id = u_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public Address getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(Address shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public Address getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(Address billingAddress) {
        this.billingAddress = billingAddress;
    }
}
