import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../../shared/services/shop/items.service";
import {AdminService} from "../../../../shared/services/admin/admin.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html'
})
export class EditItemComponent implements OnInit {

  itemId: number;
  item: any = {};

  constructor(private route: ActivatedRoute, private itemsService : ItemsService, private adminService: AdminService) { }

  ngOnInit() {
    //Subscribe to id parameter in URL and get item details
    this.route.params.subscribe(param => {
      this.itemId = param['id'];
      this.getItemDetails();
    });
  }

  getItemDetails() {
    this.itemsService.getItemDetails(this.itemId).subscribe(
        data => {
          this.item = data;
          this.item.description = this.item.description.replace(/\n/g, "<br />");
        }
    );
  }

  editItem() {

  }

}
