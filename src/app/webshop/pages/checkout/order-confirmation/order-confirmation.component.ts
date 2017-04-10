import {Component, OnInit, DoCheck} from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit, DoCheck {

  shoppingCart: ShoppingCart = {
    items: []
  };
  total: number;

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

  ngDoCheck(): void {
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

  placeOrder() {
    this.shoppingCartService.placeOrder();
  }
}
