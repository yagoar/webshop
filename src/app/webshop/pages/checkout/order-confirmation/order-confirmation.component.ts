import {Component, OnInit, DoCheck} from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../shared/services/shop/user.service";
import {ItemsAndQuantity} from "../../../../shared/models/shop/items-quantity";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit, DoCheck {

  shoppingCart: ShoppingCart = {
    items: []
  };
  total: number;
  billingAddress: any = {};
  shippingAddress:any = {};

  allGood: boolean = true;
  unavailable: ItemsAndQuantity[] = [];
  unavailableMessage: string = "";

  constructor(private shoppingCartService: ShoppingCartService, private router: Router, private userService: UserService) {
    this.shoppingCartService.shoppingCartUpdate.subscribe(
        data => {
          this.shoppingCart = data;
        }
    );
  }

  ngOnInit() {
    this.shoppingCartService.getShoppingCart();
    this.userService.getUserInfo().subscribe(
        user => {
          this.billingAddress = user.billingAddress;
          this.shippingAddress = user.shippingAddress;
        }
    );
  }

  ngDoCheck(): void {
    this.total = 0;
    this.shoppingCart.items.forEach(i => {
      this.total = this.total + (i.item.price * i.quantity);
    });
  }

  preOrderAvailabilityCheck() {
      this.unavailableMessage = "";
      this.unavailable = [];
      this.shoppingCart.items.forEach(i => {
          if(i.item.stock < i.quantity) {
              this.allGood = false;
              this.unavailable.push({item: i.item, quantity: i.item.stock});
          }})
          if(this.allGood) {
              this.placeOrder();
          }
          else {
              this.unavailable.forEach(i => {
                  this.unavailableMessage += "Der Artikel " + i.item.name + " ist nur noch " + i.quantity + " mal verfügbar.<br>";
              })
          }
  }

  placeOrder() {
    this.shoppingCartService.placeOrder().subscribe(
        data => {
          this.router.navigate(['/shop/order-success']);
        },
        error => {

        }
    );
  }

  changeAddress(type: string) {
    this.router.navigate(['/shop/change-address'], { queryParams: { type: type }});
  }
}
