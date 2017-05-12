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
    fileLocation: string;
    userfile: any;
    categories: Array<Category> = [];
    items: Array<Item> = [];

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
        /*this.itemService.getAllItems().subscribe(
            data => {
                this.items = data;
            },
            error => {
                console.log(error);
            });*/
    }

    createItemset() {
        console.log(this.item);
        this.loading = true;
        this.adminService.createItemset(this.item).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    upload() {
        this.loading = true;
        var formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.articleNumber).subscribe(
            data => {
                this.fileLocation = data;
                this.item.pictureLink = data;
                this.createItemset();
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

}