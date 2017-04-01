package com.dhbw.domain.item;

import com.dhbw.domain.user.User;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import java.util.Date;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
@XmlRootElement
public class ShoppingOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long soId;

    @OneToOne
    private User user;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    private Date date;

    private boolean paid;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = ItemAndQuantity.class, cascade = CascadeType.ALL)
    private Set<ItemAndQuantity> items;

    public ShoppingOrder() {
    }

    public ShoppingOrder(User user, Date date, Set<ItemAndQuantity> items) {
        this.user = user;
        this.date = date;
        this.items = items;
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

    public Set<ItemAndQuantity> getItems() {
        return items;
    }

    public void setItems(Set<ItemAndQuantity> items) {
        this.items = items;
    }

    public Long getSoId() {
        return soId;
    }

    public void setSoId(Long soId) {
        this.soId = soId;
    }
}
