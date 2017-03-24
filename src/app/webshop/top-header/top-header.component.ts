import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'webshop-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {

  itemsInCart: number;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.getItemCount();
  }

  ngOnInit() {
    this.shoppingCartService.itemCountUpdate.subscribe((itemCount:number) => {
      this.itemsInCart = itemCount;
    });
  }

}
