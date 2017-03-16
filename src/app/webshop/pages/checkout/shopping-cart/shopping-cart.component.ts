import {Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, DoCheck, KeyValueDiffers} from '@angular/core';
import * as _ from 'lodash';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";


@Component({
  selector: 'webshop-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart;
  total: number;
  overviewBtnMessage: string = "Zur Kasse";

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


}
