import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../shared/services/shop/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnInit {

  order: any = {};
  orderId: number;
  total: number;

  constructor(private route: ActivatedRoute, private userService : UserService) {}

  ngOnInit() {
    //Subscribe to id parameter in URL and get order details
    this.route.params.subscribe(param => {
      this.orderId = param['id'];
      this.getOrder();
    });
  }

  getOrder() {
    this.userService.getOrder(this.orderId).subscribe(
        data => {
          this.order = data;
          this.calculateTotal();
        }
    );
  }

  calculateTotal() {
    this.total = 0;
    this.order.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

}
