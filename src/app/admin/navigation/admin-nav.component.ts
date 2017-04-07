import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/services/authentication/authentication.service";

@Component({
    selector: 'admin-nav',
    templateUrl: './admin-nav.component.html'
})
export class AdminNavigationComponent implements OnInit {

    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    logout() {
        this.authService.adminLogout();
    }

}
