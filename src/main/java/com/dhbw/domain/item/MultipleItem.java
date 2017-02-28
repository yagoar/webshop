package com.dhbw.domain.item;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jgerle on 28.02.2017.
 */
@Entity
@PrimaryKeyJoinColumn(name="ID")
public class MultipleItem extends BaseItem {

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Item.class, cascade = CascadeType.ALL)
    private List<Item> items;


    public List<Item> getItems() { return items; }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
