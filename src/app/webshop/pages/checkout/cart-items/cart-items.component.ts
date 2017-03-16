import {Component, Input, EventEmitter, Output, DoCheck} from '@angular/core';
import * as _ from 'lodash';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ItemsAndQuantity} from "../../../../shared/models/shop/items-quantity";

@Component({
  selector: 'webshop-cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent implements DoCheck {

  @Input()  shoppingCart: ShoppingCart;
  @Input()  overviewBtnMessage: string;
  total: number = 0;

  constructor() { }

  ngDoCheck(): void {
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

  removeItem(itemq : ItemsAndQuantity) {
    _.remove(this.shoppingCart.items, itemq);
    //API Call
  }

  addOne(itemId : number) {
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        scItem.quantity++;
      }
      return scItem;
    });

  }

  removeOne(itemId : number) {
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        if(scItem.quantity > 1) {
          scItem.quantity--;
        }
      }
      return scItem;
    });
  }

}
