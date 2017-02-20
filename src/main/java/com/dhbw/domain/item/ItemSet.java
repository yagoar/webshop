package com.dhbw.domain.item;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
public class ItemSet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private double price;

    @ManyToMany(targetEntity = Item.class, cascade = CascadeType.ALL)
    private List<Item> items;

    @ManyToOne(targetEntity = Category.class, cascade = CascadeType.ALL)
    private Category category;

    private String pictureLink;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) { this.items = items; }

    public Category getCategory() { return category; }

    public void setCategory(Category category) { this.category = category; }

    public String getPictureLink() { return pictureLink; }

    public void setPictureLink(String pictureLink) { this.pictureLink = pictureLink; }
}
