import {Component, OnInit, Input, Output} from '@angular/core';
import * as _ from 'lodash';
import {SideBarFilter} from "./model/sidebar-filter";
import {Category} from "../../../../shared/models/shop/category";
import {Item} from "../../../../shared/models/shop/item";
import {FilterOption} from "./model/filter-option";

@Component({
  selector: 'items-sidebar',
  templateUrl: './item-sidebar.component.html'
})
export class ItemsSidebarComponent implements OnInit {

  categoriesIsOpen: boolean = true;
  checkedFilters: Array<any> = [];
  @Input()  categories: Category[];
  @Input()  filters: SideBarFilter[];
  @Output() filteredItems: Item[];

  ngOnInit() {
  }

  setFilters() {

    this.checkedFilters.push({'brand' : []}, {'color' : []}, {'material' : []});

    let selBrands: string[] = [];
    let selColors: string[] = [];
    let selMaterials: string[] = [];

    this.filters.forEach(f => {
      if(_.findIndex(f.options, {'filter': 'brand', 'checked' : true}) !== -1){
        selBrands.push()
      }
    });
  }


}
