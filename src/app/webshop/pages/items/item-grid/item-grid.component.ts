import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PagerService} from "../../../../shared/services/shop/pager.service";
import {Item} from "../../../../shared/models/shop/item";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";
import {FilterOption} from "../item-sidebar/model/filter-option";
import {ItemsService} from "../../../../shared/services/shop/items.service";
import * as _ from 'lodash';
import {AuthenticationService} from "../../../../shared/services/authentication/authentication.service";
import {RouterStateSnapshot, Router, RouterState} from "@angular/router";

@Component({
  selector: 'items-grid',
  templateUrl: './item-grid.component.html'
})
export class ItemsGridComponent implements OnInit, OnChanges {

  @Input() items: Item[] = [];
  selectedFilters: Array<FilterOption> = [];
  filteredItems: Item[] = [];
  pagedItems: Item[];
  pager: any = {};
  pageSize: number = 6;
  snapshot: any;

  constructor(private pagerService: PagerService,
              private shoppingCartService: ShoppingCartService,
              private itemsService: ItemsService,
              private authenticationService: AuthenticationService,
              private router: Router
  ) {
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    this.snapshot = snapshot;
  }

  ngOnInit() {
    //this.filteredItems = this.items;
    this.itemsService.selectedFilters.subscribe(selectedFilters => {
      this.selectedFilters = selectedFilters;
      //check if there are any filters selected
      if(this.selectedFilters.length > 0) {
        this.applyFilters();
      } else {
        this.resetFilters();
      }
    });
  }

  ngOnChanges() {
    this.resetFilters();
  }

  applyFilters() {
    this.filteredItems = [];

    let brandFilters = _.filter(this.selectedFilters, {filter: 'brand'});
    let colorFilters = _.filter(this.selectedFilters, {filter: 'color'});
    let materialFilters = _.filter(this.selectedFilters, {filter: 'material'});

    //search for items that match the filters
    this.items.forEach(i => {
      let brandMatch: boolean = true;
      let colorMatch: boolean = true;
      let materialMatch: boolean = true;

      if(brandFilters.length > 0) {
        brandMatch = _.filter(brandFilters, {name: i.brand}).length > 0;
      }
      if(colorFilters.length > 0) {
        colorMatch = _.filter(colorFilters, {name: i.color}).length > 0;
      }
      if(materialFilters.length > 0) {
        materialMatch = _.filter(materialFilters, {name: i.material}).length > 0;
      }

      //Only show elements that match all filters 
      if(brandMatch && colorMatch && materialMatch ) {
        this.filteredItems.push(i);
      }
    });

    this.setPage(1);
  }

  resetFilters() {
    this.filteredItems = this.items;
    this.setPage(1);
  }

  setPageSize(size: number) {
    this.pageSize = size; //not used
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.filteredItems.length, page, this.pageSize);
    // get current page of items
    this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

  onPageChange(event:any) {
    this.setPage(event.page);
  }

  addToCart(item:Item) {
    if(this.authenticationService.token != null) {
      this.shoppingCartService.addItemToShoppingCart(item);
    } else {
      this.shoppingCartService.tempStoreItem(item);
      this.router.navigate(['/shop/login'], { queryParams: { returnUrl: this.snapshot.url }});
    }
  }

}
