import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {SideBarFilter} from './item-sidebar/model/sidebar-filter';
import {Category} from '../../../shared/models/shop/category';
import {FilterOption} from "./item-sidebar/model/filter-option";
import {Item} from "../../../shared/models/shop/item";
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../shared/services/shop/items.service";

@Component({
  selector: 'items',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {

  categoryId: number;
  childCategoryId: number;
  category: Category = {name: ''};
  items: Item[] = [];
  categories: Array<Category> = [];
  filters: Array<SideBarFilter>;
  selectedFilters: Array<FilterOption> = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private itemsService : ItemsService) {

  }

  ngOnInit() {

    //Subscribe to id parameter in URL and get items
    this.route.params.subscribe(param => {
      this.loading = true;
      this.categoryId = param['id'];
      if(param['childId'] != null) {
        this.childCategoryId = param['childId'];
        this.getItemPage(this.childCategoryId);
      } else {
        this.getItemPage(this.categoryId);
      }
    });

    //subscribe to filter changes
    this.itemsService.selectedFilters.subscribe(selFilters => {
      this.selectedFilters = selFilters;
    });

  }

  getItemPage(catId) {
    this.itemsService.getItemPage(catId).subscribe(
        data => {
          this.items = data.items;
          this.category = data.category;
          this.categories = this.category.childrenCategories;
          this.getFilters();
          this.loading = false;
        },
        error => {
          console.log(error);
        });
  }

  getFilters() {

    this.filters = [];

    let brands: Array<FilterOption> = [];
    let colors: Array<FilterOption> = [];
    let materials: Array<FilterOption> = [];

    //for all items fetch available brands, colors and materials to use in the sidebar filter
    this.items.forEach(i => {

      if( i.brand != null && _.findIndex(brands, {name:  i.brand}) === -1) {
        let selBrand = _.filter(this.selectedFilters, {name:  i.brand, filter: 'brand'})[0];
        if(selBrand != null) {
          brands.push(selBrand);
        } else {
          brands.push(new FilterOption(i.brand, "brand"));
        }
      }

      if( i.color != null && _.findIndex(colors, {name:  i.color}) === -1) {
        let selColor = _.filter(this.selectedFilters, {name:  i.color, filter: 'color'})[0];
        if(selColor != null) {
          colors.push(selColor);
        } else {
          colors.push(new FilterOption(i.color, "color"));
        }
      }

      if( i.material != null && _.findIndex(materials, {name:  i.material}) === -1) {
        let selMaterial = _.filter(this.selectedFilters, {name:  i.material, filter: 'material'})[0];
        if(selMaterial != null) {
          materials.push(selMaterial);
        } else {
          materials.push(new FilterOption(i.material, "material"));
        }
      }
    });

    this.filters.push(
        new SideBarFilter("Marke", brands),
        new SideBarFilter("Farbe", colors),
        new SideBarFilter("Material", materials) );

  }




}
