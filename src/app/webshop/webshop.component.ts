import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../shared/models/shop/shopping-cart";

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html'
})
export class WebshopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.storeShoppingCart();
  }

  storeShoppingCart(){

    let shoppingCart: ShoppingCart = {
      items: [
        {
          item: {
            id: 3,
            name: 'Noodles grün',
            dtype: 'single',
            articleNumber: 123,
            stock: 123,
            category: {
              id: 1,
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
            id: 3,
            name: 'Noodles grün',
            dtype: 'single',
            articleNumber: 123,
            stock: 123,
            category: {
              id: 1,
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

    if(localStorage.getItem('shopping-cart') === null){
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }

}
