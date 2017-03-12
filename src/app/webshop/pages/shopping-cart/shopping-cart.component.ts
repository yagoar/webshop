import { Component, OnInit } from '@angular/core';
import {Item} from "../../../shared/models/shop/item";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'webshop-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  items: Item[];
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
