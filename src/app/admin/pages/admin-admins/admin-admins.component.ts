import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {User} from "../../../shared/models/user";

@Component({
    selector: 'admin-admins',
    templateUrl: 'admin-admins.component.html'
})
export class AdminAdminsComponent implements OnInit {

    @Input() admins : Array<User> = [];

    constructor(private adminService : AdminService) {
    }

    ngOnInit() {
        this.adminService.getAllUsers().subscribe(
            data => {
                this.admins = data;
            },
            error => {
                console.log(error);
            });
    }

    adminToggle(email: string, e) {
        if(e.target.checked || !e.target.checked) {
            this.adminService.makeAdmin(email).subscribe(
                error => {
                    console.log(error);
                }
            );
        }
    }
}