import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService, Credentials} from "../../../../shared/services/authentication/authentication.service";
import {User} from "../../../../shared/models/user";

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
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(new Credentials(this.model.email, this.model.password))
        .subscribe(
            data => {
              this.loginFailed = false;
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
