import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../shared/services/shop/items.service";
import {Category} from "../../shared/models/shop/category";
import {Router} from "@angular/router";

@Component({
  selector: 'webshop-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  public isCollapsed:boolean = true;
  public parentCategories: Array<Category> = [];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getParentCategories().subscribe(
        data => {
          this.parentCategories = data;
        }
    )
  }

  navigateToCategory(categoryId) {
    this.isCollapsed = !this.isCollapsed;
    this.router.navigate([`/shop/category/${categoryId}`]);
  }

}
