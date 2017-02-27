package com.dhbw.domain.item;

import com.dhbw.domain.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import java.util.Date;
import java.util.Map;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
@XmlRootElement
public class ShoppingOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm")
    private Date date;

    private boolean paid;

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name="order_item_qty", joinColumns=@JoinColumn(name="parentEntity_id"))
    @MapKeyJoinColumn(name="item_id")
    @Column(name="qty")
    private Map<Item, Integer> itemsAndQuantity;

    @ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name="order_itemSet_qty", joinColumns=@JoinColumn(name="parentEntity_id"))
    @MapKeyJoinColumn(name="itemSet_id")
    @Column(name="qty")
    private Map<ItemSet, Integer> itemSetsAndQuantity;

    public ShoppingOrder() {
    }

    public ShoppingOrder(User user, Date date, Map<Item, Integer> items, Map<ItemSet, Integer> ItemSets) {
        this.user = user;
        this.date = date;
        this.itemsAndQuantity = items;
        this.itemSetsAndQuantity = ItemSets;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

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

    @XmlTransient
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Map<Item, Integer> getItemsAndQuantity() { return itemsAndQuantity; }

    public void setItemsAndQuantity(Map<Item, Integer> itemsAndQuantity) { this.itemsAndQuantity = itemsAndQuantity; }

    public Map<ItemSet, Integer> getItemSetsAndQuantity() { return itemSetsAndQuantity; }

    public void setItemSetsAndQuantity(Map<ItemSet, Integer> itemSetsAndQuantity) { this.itemSetsAndQuantity = itemSetsAndQuantity; }
}
