import { Component, OnInit } from '@angular/core';
import {AdminAuthenticationService} from "../../shared/services/authentication/admin-authentication.service";

@Component({
    selector: 'admin-nav',
    templateUrl: './admin-nav.component.html'
})
export class AdminNavigationComponent implements OnInit {

    constructor(private adminAuthService: AdminAuthenticationService) { }

    ngOnInit() {
    }

    logout() {
        this.adminAuthService.adminLogout();
    }

}
