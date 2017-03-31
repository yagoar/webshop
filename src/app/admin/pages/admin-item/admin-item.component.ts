import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {ItemsService} from "../../../shared/services/shop/items.service";

@Component({
    selector: 'admin-item',
    templateUrl: 'admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

    item: any = {};

    constructor(private adminService: AdminService, private itemsService : ItemsService) {

    }

    ngOnInit() {
    }

    createItem() {
        this.adminService.createItem(this.item);
    }
}