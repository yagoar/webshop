import { Component, OnInit } from '@angular/core';
import {PagerService} from "../../../shared/services/shop/pager.service";
import {ItemsService} from "../../../shared/services/shop/items.service";
import * as _ from "lodash";
import {AdminService} from "../../../shared/services/admin/admin.service";
import {Router} from "@angular/router";

@Component({
    selector: 'admin-manage',
    templateUrl: './admin-manage.component.html'
})
export class AdminManageComponent implements OnInit {

    items: any[] = [];
    filteredItems: any[] = [];
    pagedItems: any[];
    pager: any = {};
    pageSize: number = 30;

    artNrFilter: string = "";

    constructor(private pagerService: PagerService, private itemsService: ItemsService, private adminService: AdminService, private router: Router) {
    }

    ngOnInit() {
        this.getAllItems();
    }

    getAllItems() {
        this.itemsService.getAllItems().subscribe(data => {
            this.items = _.orderBy(data, ['article_number'], ['asc']);
            this.filteredItems = this.items;
            this.setPage(1);
        })
    }

    applyFilter(filter) {
        this.artNrFilter = filter;
        if(this.artNrFilter !== "") {
            this.filteredItems = this.items.filter(item => item.articleNumber.toString().startsWith(this.artNrFilter));
        } else {
            this.filteredItems = this.items;
        }
        this.setPage(1);
    }

    setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.filteredItems.length, page, this.pageSize);
        // get current page of items
        this.pagedItems = this.filteredItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    onPageChange(event:any) {
        this.setPage(event.page);
    }

    editItem(item) {
        if(item.dtype === "single"){
            this.router.navigate([`/admin/manage/item/${item.i_id}`]);
        }else if(item.dtype === "multiple"){
            this.router.navigate([`/admin/manage/set/${item.i_id}`]);
        }
    }

    deleteItem(itemId) {
        this.adminService.deleteItem(itemId).subscribe(data => {
            this.getAllItems();
        })
    }
}