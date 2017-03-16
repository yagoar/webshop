import { Component, OnInit } from '@angular/core';
import {CartCountService} from "../../shared/services/cart-count.service";

@Component({
  selector: 'webshop-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {

  itemsInCart: number;

  constructor(private cartCountService: CartCountService) {
    this.cartCountService.getItemCount();
  }

  ngOnInit() {
    this.cartCountService.itemCountUpdate.subscribe((itemCount:number) => {
      this.itemsInCart = itemCount;
    });
  }

}
