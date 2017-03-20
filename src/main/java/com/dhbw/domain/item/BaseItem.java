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
    private Long i_id;

    @Column(name = "dtype", insertable = false, updatable = false)
    private String dtype;

    private int articleNumber;

    private int stock;

    private String name;

    @ManyToOne(targetEntity = Category.class, cascade = CascadeType.DETACH)
    private Category category;

    private String description;

    private double price;

    private String pictureLink;

    private boolean deleted;

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

    public String getDtype() {
        return dtype;
    }

    public void setDtype(String dtype) {
        this.dtype = dtype;
    }

    public int getArticleNumber() {
        return articleNumber;
    }

    public void setArticleNumber(int articleNumber) {
        this.articleNumber = articleNumber;
    }

    public int getStock() { return stock; }

    public void setStock(int stock) { this.stock = stock; }

    public Long getI_id() { return i_id; }

    public void setI_id(Long i_id) { this.i_id = i_id; }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseItem baseItem = (BaseItem) o;

        return i_id.equals(baseItem.i_id);
    }

    @Override
    public int hashCode() {
        return i_id.hashCode();
    }
}
