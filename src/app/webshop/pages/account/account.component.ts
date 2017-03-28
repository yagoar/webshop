import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";
import {UserService} from "../../../shared/services/shop/user.service";
import {Router} from "@angular/router";
import {Address} from "../../../shared/models/address";

@Component({
  selector: 'webshop-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  user: any = {};
  billingAddr: any = {};
  shippingAddr: any = {};

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getUserInfo();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(data => {
      this.user = data;
      this.user.addresses.forEach((a:Address) => {
        if(a.addressType === "BILLING") {
          this.billingAddr = a;
        } else {
          this.shippingAddr = a;
        }
      })
    })
  }

}
