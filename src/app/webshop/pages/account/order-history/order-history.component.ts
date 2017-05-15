import {Component, OnInit, NgZone} from '@angular/core';
import {PagerService} from "../../../../shared/services/shop/pager.service";
import {UserService} from "../../../../shared/services/shop/user.service";
import * as _ from 'lodash';


@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent implements OnInit {

  orders: any[] = [];
  pagedOrders: any[];
  pager: any = {};
  pageSize: number = 3;

  innerWidth: number;

  constructor(private pagerService: PagerService, private userService: UserService, private ngZone: NgZone) {

    window.onresize = (e) =>
    {
      //ngZone.run will help to run change detection
      this.ngZone.run(() => {
        this.innerWidth = window.innerWidth;
      });
    };
  }

  ngOnInit() {
    this.getUserOrders();
    this.innerWidth = window.innerWidth;
  }

  getUserOrders() {
    this.userService.getUserOrders().subscribe(data => {
      this.orders = _.orderBy(data, ['date'], ['desc']);
      this.setPage(1);
    })
  }

  openOrder(orderId : number) {

  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.orders.length, page, this.pageSize);
    // get current page of items
    this.pagedOrders = this.orders.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onPageChange(event:any) {
    this.setPage(event.page);
  }

}
