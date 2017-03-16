import { Component, OnInit } from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit {

  shoppingCart: ShoppingCart;
  total: number;
  overviewBtnMessage: string = "Kostenpflichtig bestellen";

  constructor() {
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
            i_id: 2,
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
  }

  ngOnInit() {

  }

  onNotify(sc:ShoppingCart):void {
    this.shoppingCart = sc;
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

}
