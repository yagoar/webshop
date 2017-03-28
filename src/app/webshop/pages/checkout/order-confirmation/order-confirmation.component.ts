import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";

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
    this.shoppingCartService.shoppingCartUpdate.subscribe(
        data => {
          this.shoppingCart = data;
        }
    );
  }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart();
  }
}
