import {Component, OnInit, DoCheck} from '@angular/core';
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";

@Component({
  selector: 'webshop-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit, DoCheck {

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
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

  ngDoCheck(): void {
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }
}
