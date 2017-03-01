package com.dhbw.domain.item;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by jgerle on 28.02.2017.
 */
@Entity
@Inheritance(strategy= InheritanceType.SINGLE_TABLE)
@XmlRootElement
public class BaseItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToOne(targetEntity = Category.class, cascade = CascadeType.ALL)
    private Category category;

    private String description;

    private double price;

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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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

    public String getPictureLink() {
        return pictureLink;
    }

    public void setPictureLink(String pictureLink) {
        this.pictureLink = pictureLink;
    }
}
