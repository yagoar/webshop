import {Component, Input, EventEmitter, Output, DoCheck} from '@angular/core';
import * as _ from 'lodash';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ItemsAndQuantity} from "../../../../shared/models/shop/items-quantity";
import {ShoppingCartService} from "../../../../shared/services/shopping-cart.service";

@Component({
  selector: 'webshop-cart-items',
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent implements DoCheck {

  @Input()  shoppingCart: ShoppingCart;
  @Input()  overviewBtnMessage: string;
  total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngDoCheck(): void {
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

  removeItem(itemq : ItemsAndQuantity) {
    _.remove(this.shoppingCart.items, itemq);
    this.shoppingCartService.removeItemFromShoppingCart(itemq.item.i_id).subscribe(
        data => {
          this.shoppingCartService.getItemCount();
        }
    );
  }

  addOne(itemId : number) {
    let newQuantity: number = 0;
    let _this = this;
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        scItem.quantity++;
        newQuantity=scItem.quantity;
      }
      console.log(newQuantity);
      _this.shoppingCartService.updateItemQuantity(itemId,newQuantity).subscribe(
          data => {
            console.log(data);
          }
      );
      return scItem;
    });



  }

  removeOne(itemId : number) {
    let newQuantity: number = 0;
    let _this = this;
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        if(scItem.quantity > 1) {
          scItem.quantity--;
          newQuantity=scItem.quantity;
        }
      }
      _this.shoppingCartService.updateItemQuantity(itemId,newQuantity).subscribe(
          data => {
            console.log(data);
          }
      );

      return scItem;
    });


  }

}
