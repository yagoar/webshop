import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";

@Component({
  selector: 'webshop-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
  }

}
