import {Component, OnInit, Pipe} from '@angular/core';
import {ActivatedRoute, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {ItemsService} from "../../../shared/services/shop/items.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Item} from "../../../shared/models/shop/item";
import {ShoppingCartService} from "../../../shared/services/shop/shopping-cart.service";
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";

@Component({
  selector: 'webshop-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent implements OnInit {

  itemId: number;
  item: any = {};
  snapshot: any;

    constructor(private shoppingCartService: ShoppingCartService,
                private itemsService: ItemsService,
                private authenticationService: AuthenticationService,
                private router: Router,
                private route: ActivatedRoute
    ) {
        const state: RouterState = router.routerState;
        this.snapshot = state.snapshot;
    }


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

        if(this.authenticationService.token != null) {
            this.shoppingCartService.addItemToShoppingCart(item);
        } else {
            this.shoppingCartService.tempStoreItem(item);
            this.router.navigate(['/shop/login'], { queryParams: { returnUrl: this.snapshot.url }});
        }
    }

}

@Pipe({name: 'safeHtml'})
export class SafePipe {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}
@Pipe({name: 'safeUrl'})
export class SafePipeUrl {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        return this.sanitizer.bypassSecurityTrustUrl(style);
    }
}
