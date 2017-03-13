import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {SideBarFilter} from './item-sidebar/model/sidebar-filter';
import {Category} from '../../../shared/models/shop/category';
import {FilterOption} from "./item-sidebar/model/filter-option";
import {Item} from "../../../shared/models/shop/item";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'items',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {

  category: Category;
  items: Item[] = [];
  categories: Array<Category> = [];
  filters: Array<SideBarFilter> = [];

  constructor(private router: Router, private route: ActivatedRoute) {

    this.getCategoryId();

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.getCategoryId();
      }
    });


  }

  ngOnInit() {





    this.items =[
      {
        id: 1,
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
      {
        id: 2,
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
        brand: 'Cusco',
        color: 'grün',
        weight: 400,
        material: 'Baumwolle'
      },
      {
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
      {
        id: 4,
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
      {
        id: 5,
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
      {
        id: 6,
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
      }
    ];

    this.getCategories();
    this.getFilters();
  }

  getCategoryId() {
    let categoryId;

    this.route.params.subscribe(param => {
      categoryId = param['id'];
    });

    return categoryId;
  }

  getCategories() {
    this.categories = [
      {
        id:1,
        name : 'Nadeln',
        description :'desc',
        childCategories : [
          {
            id:2,
            name : 'Nadeln2',
            description :'desc',
            childCategories : [
              {
                id:3,
                name : 'Knöpfe',
                description :'desc',
                childCategories : []
              }
            ]
          }
        ]
      },
      {
        id:3,
        name : 'Knöpfe',
        description :'desc',
        childCategories : []
      }
    ];
  }

  getFilters() {

    //Create side bar filter objects
    let brandFilters = new SideBarFilter('Marke', []);
    let colorFilters = new SideBarFilter('Farbe', []);
    let materialFilters = new SideBarFilter('Material', []);

    this.items.forEach(i => {

      if( i.brand !== null && _.findIndex(brandFilters.options, {name: i.brand}) === -1) {
        brandFilters.options.push(new FilterOption(i.brand, 'brand'));
      }

      if( i.color !== null && _.findIndex(colorFilters.options, {name: i.color}) === -1) {
        colorFilters.options.push(new FilterOption(i.color, 'color'));
      }

      if( i.material !== null && _.findIndex(materialFilters.options, {name: i.material}) === -1) {
        materialFilters.options.push(new FilterOption(i.material, 'material'));
      }

    });

    this.filters.push(brandFilters, colorFilters, materialFilters);
  }



}
