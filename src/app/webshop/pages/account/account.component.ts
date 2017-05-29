import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";
import {UserService} from "../../../shared/services/shop/user.service";
import {Router, RouterState} from "@angular/router";
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
  billingAddress:any = {};
  shippingAddress:any = {};

  changeEmail: boolean = false;
  changePassword: boolean = false;
  newEmail: string;

  previousPassword: string;
  newPassword: string;
  changePWFailed: boolean = false;
  changePWSuccess: boolean = false;
  changeEmailFailed: boolean = false;
  changeEmailSuccess: boolean = false;

  snapshot: any;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private shoppincartService: ShoppingCartService,
              private router: Router) {
    const state: RouterState = router.routerState;
    this.snapshot = state.snapshot;
  }

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
      this.billingAddress = this.user.billingAddress;
      this.shippingAddress = this.user.shippingAddress;
    })
  }

  changePW() {
    let resetPassword = new ResetPassword(this.previousPassword, this.newPassword, this.user.email, null);
    this.userService.changePassword(resetPassword).subscribe(
        data => {
          this.changePWSuccess = true;
          this.resetPWInputs();
          this.changePassword = false;
        },
        error => {
          this.changePWFailed = true;
          this.resetPWInputs();
        }
    );
  }

  cancelChangePassword() {
    this.changePassword = false;
    this.resetPWInputs();
  }

  resetPWInputs() {
    this.previousPassword = '';
    this.newPassword = '';
  }

  changeEmailAddr() {
    let resetPassword = new ResetPassword(null, null, this.user.email, this.newEmail);
    this.userService.changeEmail(resetPassword).subscribe(
        data => {
          this.user.email = this.newEmail;
          this.changeEmailSuccess = true;
          this.changeEmail = false;
        },
        error => {
          this.cancelChangeEmail();
          this.changeEmailFailed = true;
        }
    );
  }

  cancelChangeEmail() {
    this.changeEmail = false;
    this.newEmail = '';
  }

  changeAddress(type: string) {
    this.userService.currentShippingAddress = this.shippingAddress;
    this.userService.currentBillingAddress = this.billingAddress;
    this.router.navigate(['/shop/change-address'], { queryParams: { type: type, returnUrl: this.snapshot.url }});
  }

}
