import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../../shared/models/shop/shopping-cart";

@Component({
  selector: 'webshop-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {

  itemsInCart: number;

  constructor() { }

  ngOnInit() {
    let shoppingCart:ShoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(shoppingCart !== null){
      this.itemsInCart = shoppingCart.items.length;
    } else {
      this.itemsInCart = 0;
    }
  }

}
