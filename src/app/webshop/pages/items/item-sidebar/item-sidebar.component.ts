import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as _ from 'lodash';
import {Category} from "../../../../shared/models/shop/category";
import {FilterOption} from "./model/filter-option";
import {SideBarFilter} from "./model/sidebar-filter";

@Component({
  selector: 'items-sidebar',
  templateUrl: './item-sidebar.component.html'
})
export class ItemsSidebarComponent implements OnInit {

  categoriesIsOpen: boolean = true;
  @Input()  categories: Category[];
  @Input()  filters: Array<SideBarFilter>;
  @Output() filterEvent: EventEmitter<FilterOption[]> = new EventEmitter();
  selectedFilters: FilterOption[] = [];

  ngOnInit() {
  }

  setFilters() {
    this.filterEvent.emit(this.selectedFilters);
  }

  resetFilters() {
    this.selectedFilters = [];
    this.filterEvent.emit(this.selectedFilters);
  }


  addFilter(option: FilterOption) {

    let optNotInArray = _.findIndex(this.selectedFilters, {name: option.name, filter: option.filter}) === -1;

    if(option.checked && optNotInArray) {
      this.selectedFilters.push(option)
    } else if (!option.checked && !optNotInArray){
      this.selectedFilters.splice(this.selectedFilters.indexOf(option))
    }
  }




}
