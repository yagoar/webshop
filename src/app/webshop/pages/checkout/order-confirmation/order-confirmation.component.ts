import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ShoppingCartService} from "../../../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit {

  shoppingCart: ShoppingCart = {
    items: []
  };
  total: number;
  overviewBtnMessage: string = "Kostenpflichtig bestellen";

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart().subscribe(
        data => {
          this.shoppingCart = data;
        }
    );
  }
}
