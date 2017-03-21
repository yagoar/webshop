import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'webshop-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  user: any = {};

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  logout() {
    this.authenticationService.logout();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(data => {
      this.user = data;
    })
  }

}
