package com.dhbw.domain.item;

import com.dhbw.domain.user.User;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
@XmlRootElement
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sc_id;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = ItemAndQuantity.class, cascade = CascadeType.ALL)
    private Set<ItemAndQuantity> items;

    @OneToOne(targetEntity = ShoppingOrder.class)
    private ShoppingOrder shoppingOrder;

    public ShoppingCart() {
    }

    public Long getSc_id() {
        return sc_id;
    }

    public void setSc_id(Long sc_id) {
        this.sc_id = sc_id;
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

    public Set<ItemAndQuantity> getItems() {
        return items;
    }

    public void setItems(Set<ItemAndQuantity> items) {
        this.items = items;
    }

    public boolean isItemInCart(BaseItem item) {

        boolean result = false;
        for(ItemAndQuantity entry : items) {
            if(entry.getItem().equals(item)) result = true;
        }
        return result;
    }

    public void addItemToCart(BaseItem item, int quantity) {

        if(!isItemInCart(item)) {
            ItemAndQuantity toAdd = new ItemAndQuantity();
            toAdd.setItem(item);
            toAdd.setQuantity(quantity);
            items.add(toAdd);
        }
        else {
            for(ItemAndQuantity entry : items) {
                if (entry.getItem().equals(item)) {
                    entry.setQuantity(entry.getQuantity() + quantity);
                }
            }
        }
    }

    public void removeItemFromCart(BaseItem item) {

        ItemAndQuantity toRemove = new ItemAndQuantity();
        for(ItemAndQuantity entry : items) {
            if (entry.getItem().equals(item)) {
                toRemove = entry;
            }
        }
        items.remove(toRemove);
    }

    public void reduceQuantityOfItemInCart(BaseItem item, int quantity) {

        for(ItemAndQuantity entry : items) {
            if (entry.getItem().equals(item)) {
                entry.setQuantity(entry.getQuantity() - quantity);
            }
        }
    }

    public void updateQuantityOfItemInCart(BaseItem item, int quantity) {

        for(ItemAndQuantity entry : items) {
            if (entry.getItem().equals(item)) {
                entry.setQuantity(quantity);
            }
        }
    }
}
