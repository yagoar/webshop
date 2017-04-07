import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {ItemsService} from "../../../shared/services/shop/items.service";

@Component({
    selector: 'admin-item',
    templateUrl: 'admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

    item: any = {};
    loading = false;
    fileLocation: string;
    userfile: any;

    constructor(private adminService: AdminService) {

    }

    ngOnInit() {
    }

    createItem() {
        this.loading = true;
        this.adminService.createItem(this.item).subscribe(
            data => {
                this.loading=false;
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
                this.createItem();
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