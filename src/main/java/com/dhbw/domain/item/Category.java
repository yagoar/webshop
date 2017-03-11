package com.dhbw.domain.item;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Set;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
@XmlRootElement
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long c_id;

    @OneToOne
    private Category parentCategory;

    private String name;

    private String description;

    public Long getC_id() {
        return c_id;
    }

    public void setC_id(Long c_id) {
        this.c_id = c_id;
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

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }
}
