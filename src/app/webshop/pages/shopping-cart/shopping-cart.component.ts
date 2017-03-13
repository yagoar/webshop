import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {ShoppingCart} from "../../../shared/models/shop/shopping-cart";
import {ItemsAndQuantity} from "../../../shared/models/shop/items-quantity";

@Component({
  selector: 'webshop-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart;
  total: number = 0;

  constructor() { }

  ngOnInit() {

    this.shoppingCart= {
      items: [
        {
          item: {
            i_id: 3,
            name: 'Noodles grün',
            dtype: 'single',
            articleNumber: 123,
            stock: 123,
            category: {
              c_id: 1,
              name: 'Stricken',
              description: 'Stricknadeln und Zubehör'
            },
            description: 'Textilgarn (Baumwolle)',
            price: 12.5,
            pictureLink: 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg',
            brand: 'Stafil',
            color: 'grün',
            weight: 400,
            material: 'Baumwolle'
          },
          quantity: 1
        },
        {
          item: {
            i_id: 3,
            name: 'Noodles grün',
            dtype: 'single',
            articleNumber: 123453,
            stock: 123,
            category: {
              c_id: 1,
              name: 'Stricken',
              description: 'Stricknadeln und Zubehör'
            },
            description: 'Textilgarn (Baumwolle)',
            price: 12.5,
            pictureLink: 'http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg',
            brand: 'Stafil',
            color: 'grün',
            weight: 400,
            material: 'Baumwolle'
          },
          quantity: 1
        }
      ]
    };

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
    })
  }

  removeOne(itemId : number) {
    _.map(this.shoppingCart.items,function(scItem: ItemsAndQuantity){
      if(scItem.item.i_id === itemId) {
        if(scItem.quantity > 1) {
          scItem.quantity--;
        }
      }
      return scItem;
    })
  }

}
