import {Component, Input} from '@angular/core';
import * as _ from 'lodash';
import {Category} from "../../../../shared/models/shop/category";
import {FilterOption} from "./model/filter-option";
import {SideBarFilter} from "./model/sidebar-filter";
import {ItemsService} from "../../../../shared/services/shop/items.service";

@Component({
  selector: 'items-sidebar',
  templateUrl: './item-sidebar.component.html'
})
export class ItemsSidebarComponent {

  categoriesIsOpen: boolean = true;
  @Input()  categories: Category[];
  @Input()  filters: Array<SideBarFilter>;
  selectedFilters: FilterOption[] = [];

  constructor(private itemsService: ItemsService) {}

  setFilters() {
    //trigger event on all observer components
    this.itemsService.setFilters(this.selectedFilters);
  }

  resetFilters() {
    //reset selected filters array
    this.selectedFilters = [];

    //uncheck all options
    this.filters.forEach(filter => {
      filter.options.forEach(option => {
        option.checked = false;
      })
    });
    this.setFilters();
  }

  addFilter(option: FilterOption) {
    let optNotInArray = _.findIndex(this.selectedFilters, {name: option.name, filter: option.filter}) === -1;

    //check if option is selected and if it already is in the array
    if(option.checked && optNotInArray) {
      this.selectedFilters.push(option)
    } else if (!option.checked && !optNotInArray){
      this.selectedFilters.splice(this.selectedFilters.indexOf(option))
    }
  }
}
