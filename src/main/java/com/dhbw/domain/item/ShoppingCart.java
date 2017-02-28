package com.dhbw.domain.item;

import com.dhbw.domain.user.User;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
@XmlRootElement
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = ItemAndQuantity.class, cascade = CascadeType.ALL)
    private List<ItemAndQuantity> items;

    @OneToOne(targetEntity = ShoppingOrder.class)
    private ShoppingOrder shoppingOrder;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ShoppingOrder getShoppingOrder() {
        return shoppingOrder;
    }

    public void setShoppingOrder(ShoppingOrder shoppingOrder) { this.shoppingOrder = shoppingOrder; }

    public List<ItemAndQuantity> getItems() {
        return items;
    }

    public void setItems(List<ItemAndQuantity> items) {
        this.items = items;
    }
}
