package com.dhbw.domain.item;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by jgerle on 28.02.2017.
 */
@Entity
@XmlRootElement
public class ItemAndQuantity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long iq_id;

    @OneToOne(fetch = FetchType.EAGER)
    private BaseItem item;

    private int quantity;

    public Long getIq_id() {
        return iq_id;
    }

    public void setIq_id(Long iq_id) {
        this.iq_id = iq_id;
    }

    public BaseItem getItem() {
        return item;
    }

    public void setItem(BaseItem item) {
        this.item = item;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
