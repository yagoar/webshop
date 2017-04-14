import {Component, OnInit, DoCheck} from '@angular/core';
import {ShoppingCart} from "../../../../shared/models/shop/shopping-cart";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../shared/services/shop/user.service";

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
