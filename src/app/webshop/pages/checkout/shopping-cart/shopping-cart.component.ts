import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";


@Component({
  selector: 'webshop-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart = {
    items: []
  };
  total: number;
  overviewBtnMessage: string = "Zur Kasse";

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.getShoppingCart().subscribe(
        data => {
          this.shoppingCart = data;
        }
    );
  }
}
