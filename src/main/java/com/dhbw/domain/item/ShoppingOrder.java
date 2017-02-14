package com.dhbw.domain.item;

import com.dhbw.domain.user.User;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
public class ShoppingOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne( cascade = CascadeType.ALL)
    private ShoppingCart shoppingCart;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    private Date date;

    private boolean paid;

    public Long getId() { return id; }

    public void setId(Long id) {
        this.id = id;
    }

    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }

    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
