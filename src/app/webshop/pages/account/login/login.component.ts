import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService, Credentials} from "../../../../shared/services/authentication/authentication.service";
import {ShoppingCartService} from "../../../../shared/services/shop/shopping-cart.service";

@Component({
  selector: 'webshop-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  loading = false;
  loginFailed: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private shoppincartService: ShoppingCartService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
      this.shoppincartService.getItemCount();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(new Credentials(this.model.email, this.model.password))
        .subscribe(
            data => {
              this.loginFailed = false;
              this.shoppincartService.mergeShoppingCart();
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.loading = false;
              this.loginFailed = true;
            });

  }

  registerRedirect() {
      this.router.navigate(['/shop/register'], { queryParams: { returnUrl: this.returnUrl }});
  }
}
