import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../shared/services/items/items.service";

@Component({
  selector: 'webshop-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {

  itemId: number;
  item: any = {};

  constructor(private route: ActivatedRoute, private itemsService : ItemsService) { }

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
          }
      );
  }



}
