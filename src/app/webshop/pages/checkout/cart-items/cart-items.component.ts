import {Component, Input, EventEmitter, Output, DoCheck} from '@angular/core';
import * as _ from 'lodash';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ItemsAndQuantity} from "../../../../shared/models/shop/items-quantity";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";

@Component({
  selector: 'webshop-cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent {

  @Input()  shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  removeItem(itemq : ItemsAndQuantity) {
    _.remove(this.shoppingCart.items, itemq);
    this.shoppingCartService.removeItemFromShoppingCart(itemq.item.i_id);
  }

  addOne(itemId : number) {
    let newQuantity: number = 0;
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        scItem.quantity++;
        newQuantity=scItem.quantity;

      }
      return scItem;
    });

    this.shoppingCartService.updateItemQuantity(itemId,newQuantity);

  }

  removeOne(itemId : number) {
    let newQuantity: number = 0;
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        if(scItem.quantity > 1) {
          scItem.quantity--;
          newQuantity=scItem.quantity;
        }
      }
      return scItem;
    });

    this.shoppingCartService.updateItemQuantity(itemId,newQuantity);
  }

}
