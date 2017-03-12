import {Component, OnInit, Input} from '@angular/core';
import {PagerService} from "../../../../shared/services/pager.service";

@Component({
  selector: 'items-grid',
  templateUrl: './item-grid.component.html'
})
export class ItemsGridComponent implements OnInit {

  @Input() items: Array<any> = [];
  pagedItems: Array<any>;
  pager: any = {};
  pageSize: number = 5;

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPageSize(size: number) {
    this.pageSize = size;
  }

  setPage(page: number) {

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

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

  public addToCart(id:number) {
  }

}
