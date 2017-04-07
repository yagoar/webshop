import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";
import {UserService} from "../../../shared/services/shop/user.service";
import {Router, RouterStateSnapshot} from "@angular/router";
import {Address} from "../../../shared/models/address";
import {ShoppingCartService} from "../../../shared/services/shop/shopping-cart.service";
import {ResetPassword} from "../../../shared/models/reset-password";

@Component({
  selector: 'webshop-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  gender = [{id: 'FEMALE', text:'Frau'},
    {id: 'MALE', text:'Herr'}];
  user: any = {};
  billingAddr: any = {};
  shippingAddr: any = {};
  changeEmail: boolean = false;
  changePassword: boolean = false;
  newEmail: string;

  previousPassword: string;
  newPassword: string;
  changePWFailed: boolean = false;
  changePWSuccess: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private shoppincartService: ShoppingCartService,
              private router: Router) { }

  ngOnInit() {
    this.getUserInfo();
  }

  logout() {
    this.authenticationService.logout();
    this.shoppincartService.resetItemCount();
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

  changePW() {
    let resetPassword = new ResetPassword(this.previousPassword, this.newPassword, this.user.email);
    console.log(resetPassword);
    this.userService.changePassword(resetPassword).subscribe(
        data => {
          this.changePWSuccess = true;
          this.previousPassword = '';
          this.newPassword = '';
        },
        error => {
          this.changePWFailed = true;
          this.previousPassword = '';
          this.newPassword = '';
        }
    );
  }

  cancelChangePassword() {
    this.changePassword = false;
    this.previousPassword = '';
    this.newPassword = '';
  }

  changeEmailAddr() {

  }

  cancelChangeEmail() {
    this.changeEmail = false;
    this.newEmail = '';
  }

  changeAddress(type: string) {
    this.router.navigate(['/shop/change-address'], { queryParams: { type: type }});
  }

}
