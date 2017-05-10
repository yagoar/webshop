import {Component, OnInit, Pipe} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../shared/services/shop/items.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Item} from "../../../shared/models/shop/item";
import {ShoppingCartService} from "../../../shared/services/shop/shopping-cart.service";

@Component({
  selector: 'webshop-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {

  itemId: number;
  item: any = {};

  constructor(private route: ActivatedRoute, private itemsService : ItemsService, private shoppingCartService : ShoppingCartService) { }

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

    public addToCart(item:Item) {
        let scItem = {
            item: item,
            quantity: 1
        };
        this.shoppingCartService.addItemToShoppingCart(scItem.item);
    }

}

@Pipe({name: 'safeHtml'})
export class SafePipe {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}
