import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../shared/models/shop/category";
import {Item} from "../../../../shared/models/shop/item";
import {AdminService} from "../../../../shared/services/admin/admin.service";
import {ItemsService} from "../../../../shared/services/shop/items.service";
import * as _ from "lodash";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-item-set',
  templateUrl: './edit-item-set.component.html'
})
export class EditItemSetComponent implements OnInit {

  itemId: number;
  item: any = {};
  loading = false;
  categories: Array<Category> = [];
  items: Array<Item> = [];
  itemsInSet: Array<Item> = [];
  itemInput: any = '';
  activeCategory = {};
  editSuccess:boolean = false;
  editFailed:boolean = false;
  addItemFailed:boolean = false;

  constructor(private route: ActivatedRoute, private adminService: AdminService, private itemService: ItemsService) {

  }

  ngOnInit() {

    //Subscribe to id parameter in URL and get item details
    this.route.params.subscribe(param => {
      this.itemId = param['id'];
      this.getItemDetails();
    });
    this.itemService.getAllCategories().subscribe(
        data => {
          this.categories = data;
        },
        error => {
          console.log(error);
        });
    this.itemService.getAllItems().subscribe(
        data => {
          this.items = data;
        },
        error => {
          console.log(error);
        });
  }

  getItemDetails() {
    this.itemService.getItemDetails(this.itemId).subscribe(
        data => {
          this.item = data;
          this.item.description = this.item.description.replace("<br />",/\n/g);
          this.activeCategory = this.item.category;
          this.itemsInSet = this.item.items;
        }
    );
  }

  editItemSet() {
    this.loading = true;
    this.item.items = this.itemsInSet;
    this.adminService.editItemSet(this.item).subscribe(
        data => {
          this.editSuccess = true;
          this.loading=false;
        },
        error => {
          this.editFailed = true;
          console.log(error);
        }
    );
  }

  addItem() {
    if (this.itemInput !== "" && !Number.isNaN(this.itemInput)) {
      let item = _.filter(this.items, {articleNumber: Number(this.itemInput)})[0];
      if (item != null) {
        this.itemsInSet.push(item);
      } else {
        this.addItemFailed = true;
      }
    }
  }

  removeItem(item){
    _.remove(this.itemsInSet, item);
  }
    


}
