import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {Category} from "../../../shared/models/shop/category";
import {ItemsService} from "../../../shared/services/shop/items.service";
import {Item} from "../../../shared/models/shop/item";

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
    selectedItems: Array<Item> = [];

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
        this.item.items = this.selectedItems;
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
        var formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.name).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    fileChangeEvent(event: any) {
        this.userfile = event.target.files[0];
        console.log(this.userfile);
    }

    onCategorySelectionChange(cat: Category) {
        this.item.category = cat;
    }

    onItemSelect(item: Item, event: any) {
        if(event.target.checked) {
            this.selectedItems.push(item);
        }
        else {
            var index = this.selectedItems.indexOf(item);
            if(index > -1) {
                this.selectedItems.splice(index, 1);
            }
        }
    }

}