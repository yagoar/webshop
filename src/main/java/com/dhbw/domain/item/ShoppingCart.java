package com.dhbw.domain.item;

import com.dhbw.domain.user.User;

import javax.persistence.*;
import java.util.Date;
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

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name="itemSet_qty", joinColumns=@JoinColumn(name="parentEntity_id"))
    @MapKeyJoinColumn(name="itemSet_id")
    @Column(name="qty")
    private Map<ItemSet, Integer> itemSetsAndQuantity;

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

    public Map<Item, Integer> getItemsAndQuantity() {
        return itemsAndQuantity;
    }

    public void setItemsAndQuantity(Map<Item, Integer> itemsAndQuantity) {
        this.itemsAndQuantity = itemsAndQuantity;
    }

    public ShoppingOrder getShoppingOrder() {
        return shoppingOrder;
    }

    public void setShoppingOrder(ShoppingOrder shoppingOrder) { this.shoppingOrder = shoppingOrder; }

    public Map<ItemSet, Integer> getItemSetsAndQuantity() { return itemSetsAndQuantity; }

    public void setItemSetsAndQuantity(Map<ItemSet, Integer> itemSetsAndQuantity) { this.itemSetsAndQuantity = itemSetsAndQuantity; }

    public void addItemToCart(Item item, Integer quantity) {

        if(!isItemInCart(item)) {
            itemsAndQuantity.put(item, quantity);
        }
        else {
            itemsAndQuantity.put(item, itemsAndQuantity.get(item) + quantity);
        }
    }

    public boolean isItemInCart(Item item) {
        return itemsAndQuantity.containsKey(item);
    }

    public void removeItemFromCart(Item item, Integer quantity) {

        int previous = itemsAndQuantity.get(item);
        int updated = previous - quantity;
        if(updated > 0) {
            itemsAndQuantity.put(item, updated);
        }
        else {
            itemsAndQuantity.remove(item);
        }
    }

    public void addItemSetToCart(ItemSet set, Integer quantity) {

        if(!isItemSetInCart(set)) {
            itemSetsAndQuantity.put(set, quantity);
        }
        else {
            itemSetsAndQuantity.put(set, itemSetsAndQuantity.get(set) + quantity);
        }
    }

    public boolean isItemSetInCart(ItemSet set) {
        return itemSetsAndQuantity.containsKey(set);
    }

    public void removeItemSetFromCart(ItemSet set, Integer quantity) {

        int previous = itemSetsAndQuantity.get(set);
        int updated = previous - quantity;
        if(updated > 0) {
            itemSetsAndQuantity.put(set, updated);
        }
        else {
            itemSetsAndQuantity.remove(set);
        }
    }
}
