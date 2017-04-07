import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Credentials} from "../../../shared/services/authentication/authentication.service";
import {AdminAuthenticationService} from "../../../shared/services/authentication/admin-authentication.service";

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;
  loading = false;
  loginFailed: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private adminAuthService: AdminAuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.adminAuthService.adminLogout();

    // get return url from route parameters or default to '/admin'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }

  login() {
    this.loading = true;
    this.adminAuthService.adminLogin(new Credentials(this.model.email, this.model.password))
        .subscribe(
            data => {
              this.loginFailed = false;
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.loading = false;
              this.loginFailed = true;
            });

  }
}
