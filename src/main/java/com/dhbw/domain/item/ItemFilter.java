package com.dhbw.domain.item;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by yaizagonzalo on 07.03.17.
 */
@XmlRootElement
public class ItemFilter {
    private List<String> brand;
    private List<String> material;
    private List<String> color;
    private double priceMin;
    private double priceMax;

    public ItemFilter() {
    }

    public List<String> getBrand() {
        return brand;
    }

    public void setBrand(List<String> brand) {
        this.brand = brand;
    }

    public List<String> getMaterial() {
        return material;
    }

    public void setMaterial(List<String> material) {
        this.material = material;
    }

    public List<String> getColor() {
        return color;
    }

    public void setColor(List<String> color) {
        this.color = color;
    }

    public double getPriceMin() {
        return priceMin;
    }

    public void setPriceMin(double priceMin) {
        this.priceMin = priceMin;
    }

    public double getPriceMax() {
        return priceMax;
    }

    public void setPriceMax(double priceMax) {
        this.priceMax = priceMax;
    }
}
