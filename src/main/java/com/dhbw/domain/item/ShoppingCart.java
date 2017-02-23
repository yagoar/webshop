package com.dhbw.domain.item;

import com.dhbw.domain.user.User;

import javax.persistence.*;
import java.util.Map;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name="item_qty", joinColumns=@JoinColumn(name="parentEntity_id"))
    @MapKeyJoinColumn(name="item_id")
    @Column(name="qty")
    private Map<Item, Integer> itemsAndQuantity;

    @OneToOne(targetEntity = ShoppingOrder.class, cascade = CascadeType.ALL)
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

    public Map<Item, Integer> getItemsAndQuantity() {
        return itemsAndQuantity;
    }

    public void setItemsAndQuantity(Map<Item, Integer> itemsAndQuantity) {
        this.itemsAndQuantity = itemsAndQuantity;
    }

    public ShoppingOrder getShoppingOrder() {
        return shoppingOrder;
    }

    public void setShoppingOrder(ShoppingOrder shoppingOrder) {
        this.shoppingOrder = shoppingOrder;
    }

    public void addItemToCart(Item item, Integer quantity) {

        if(!isItemInCart(item)) {
            itemsAndQuantity.put(item, quantity);
        }
        else {
            itemsAndQuantity.put(item, itemsAndQuantity.get(item) + quantity);
        }
    }

    public boolean isItemInCart(Item item) {
        final boolean[] alreadyInCart = {false};
        itemsAndQuantity.forEach((k, v) -> {
            if(k.getId() == item.getId()) {
                alreadyInCart[0] = true;
            }
        });
        return alreadyInCart[0];
    }
}
