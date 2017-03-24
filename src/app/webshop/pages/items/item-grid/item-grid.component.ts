import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PagerService} from "../../../../shared/services/pager.service";
import {Item} from "../../../../shared/models/shop/item";
import {ShoppingCartService} from "../../../../shared/services/shopping-cart.service";
import {FilterOption} from "../item-sidebar/model/filter-option";

@Component({
  selector: 'items-grid',
  templateUrl: './item-grid.component.html'
})
export class ItemsGridComponent implements OnChanges {

  @Input() items: Item[] = [];
  @Input() selFilters: Array<FilterOption>;
  pagedItems: Item[];
  pager: any = {};
  pageSize: number = 5;

  constructor(private pagerService: PagerService, private shoppingCartService: ShoppingCartService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.setPage(1);
  }

  setPageSize(size: number) {
    this.pageSize = size;
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.items.length, page, this.pageSize);
    // get current page of items
    this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

  onPageChange(event:any) {
      this.setPage(event.page);
  }

  public openDetailPage(id:number) {
  }

  public addToCart(item:Item) {
    let scItem = {
      item: item,
      quantity: 1
    };
    this.shoppingCartService.addItemToShoppingCart(scItem).subscribe(
        data => {
          this.shoppingCartService.getItemCount();
        }
    )
  }

}
