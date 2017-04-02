import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";

@Component({
    selector: 'admin-item',
    templateUrl: 'admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

    item: any = {};
    loading = false;

    constructor(private adminService: AdminService) {

    }

    ngOnInit() {
    }

    createItem() {
        this.loading = true;
        this.adminService.createItem(this.item);
    }
}