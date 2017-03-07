import { Component, OnInit } from '@angular/core';
import {SideBarFilter} from "./item-sidebar/sidebar-filter";
import {Category} from "../../../shared/models/shop/category";

@Component({
  selector: 'items',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {

  public items: Array<any> = [];
  public categories: Array<Category> = [];
  public filters: Array<SideBarFilter> = [];

  ngOnInit() {
    this.items =[
      {
        id: 1,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Stafil",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      },
      {
        id: 2,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Cusco",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      },
      {
        id: 3,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Stafil",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      },
      {
        id: 4,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Stafil",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      },
      {
        id: 5,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Stafil",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      },
      {
        id: 6,
        name: "Noodles grün",
        category: {
          id: 1,
          name: "Stricken",
          description: "Stricknadeln und Zubehör"
        },
        description: "Textilgarn (Baumwolle)",
        price: 12.5,
        pictureLink: "http://res.cloudinary.com/stonespiccloud/image/upload/v1471006051/sample.jpg",
        brand: "Stafil",
        color: "grün",
        weight: 400,
        material: "Baumwolle"
      }
    ];

    this.getCategories();
    this.getFilters();
  }

  public getCategories() {
    this.categories = [
      {
        id:1,
        name : "Nadeln",
        description :"desc",
        childCategories : [
          {
            id:2,
            name : "Nadeln2",
            description :"desc",
            childCategories : [
              {
                id:3,
                name : "Knöpfe",
                description :"desc",
                childCategories : []
              }
            ]
          }
        ]
      },
      {
        id:3,
        name : "Knöpfe",
        description :"desc",
        childCategories : []
      }
    ];
  }

  public getFilters() {

    //Create side bar filter objects
    let brandFilter = new SideBarFilter("Marke", []);
    let colorFilter = new SideBarFilter("Farbe", []);
    let materialFilter = new SideBarFilter("Material", []);

    this.items.forEach(i => {

      if( i.brand !== null && brandFilter.options.indexOf(i.brand) === -1) {
        brandFilter.options.push(i.brand);
      }

      if( i.color !== null && colorFilter.options.indexOf(i.color) === -1) {
        colorFilter.options.push(i.color);
      }

      if( i.material !== null && materialFilter.options.indexOf(i.material) === -1) {
        materialFilter.options.push(i.material);
      }

    });

    this.filters.push(brandFilter, colorFilter, materialFilter);
  }

}
