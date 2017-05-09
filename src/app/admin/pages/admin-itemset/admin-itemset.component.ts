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
    userfile: any;

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

}