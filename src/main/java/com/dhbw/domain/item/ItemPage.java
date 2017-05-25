package com.dhbw.domain.item;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by yaizagonzalo on 25.05.17.
 */

@XmlRootElement
public class ItemPage {

    private Category category;
    private List<BaseItem> items;

    public ItemPage(Category category, List<BaseItem> items) {
        this.category = category;
        this.items = items;
    }

    public List<BaseItem> getItems() {
        return items;
    }

    public void setItems(List<BaseItem> items) {
        this.items = items;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
