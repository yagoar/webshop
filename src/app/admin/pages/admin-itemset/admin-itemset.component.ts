import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";

@Component({
    selector: 'admin-itemset',
    templateUrl: 'admin-itemset.component.html'
})
export class AdminItemsetComponent implements OnInit {

    item: any = {};
    loading = false;
    fileLocation: string;

    constructor(private adminService: AdminService) {

    }

    ngOnInit() {
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
        formData.append("file", this.item.pictureLink);
        this.adminService.upload(formData).subscribe(
            data => {
                this.fileLocation = data;
                this.item.pictureLink = data;
            },
            error => {
                console.log(error);
            }
        );
    }

}