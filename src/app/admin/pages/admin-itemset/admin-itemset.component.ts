import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {Category} from "../../../shared/models/shop/category";
import {ItemsService} from "../../../shared/services/shop/items.service";
import {Item} from "../../../shared/models/shop/item";
import * as _ from "lodash";

@Component({
    selector: 'admin-itemset',
    templateUrl: 'admin-itemset.component.html'
})
export class AdminItemsetComponent implements OnInit {

    item: any = {};
    loading = false;
    userfile: any;
    categories: Array<Category> = [];
    items: Array<Item> = [];
    itemsInSet: Array<Item> = [];
    itemInput: any = '';
    createFailed:boolean = false;
    createSuccess:boolean = false;
    addItemFailed:boolean = false;

    constructor(private adminService: AdminService, private itemService: ItemsService) {

    }

    ngOnInit() {
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

    createItemset() {
        this.loading = true;
        this.item.items = this.itemsInSet;
        this.adminService.createItemset(this.item).subscribe(
            data => {
                this.item = data;
            },
            error => {
                console.log(error);
            }
        );
        this.uploadFile();
    }

    uploadFile() {
        this.loading = true;
        let formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.name).subscribe(
            data => {
                this.createSuccess = true;
            },
            error => {
                this.createFailed = true;
                console.log(error);
            }
        );
    }

    addItem() {
        if(this.itemInput !== "" && !Number.isNaN(this.itemInput)){
            let item = _.filter(this.items, {articleNumber: Number(this.itemInput)})[0];
            if(item != null) {
                this.itemsInSet.push(item);
            } else {
                this.addItemFailed = true;
            }
        }
    }

    fileChangeEvent(event: any) {
        this.userfile = event.target.files[0];
        console.log(this.userfile);
    }

    onCategorySelectionChange(cat: Category) {
        this.item.category = cat;
    }
}