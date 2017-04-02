import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {User} from "../../../shared/models/user";

@Component({
    selector: 'admin-admins',
    templateUrl: 'admin-admins.component.html'
})
export class AdminAdminsComponent implements OnInit {

    admins : Array<User> = [];

    constructor(private adminService : AdminService) {
    }

    ngOnInit() {
        this.adminService.getAllAdmins().subscribe(
            data => {
                this.admins = data;
            },
            error => {
                console.log(error);
            });
    }
}