import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import {UserService} from "../../../services/user.service";

@Component({
    selector: 'webshop-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    user: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
                data => {
                    localStorage.setItem('currentUser', JSON.stringify(this.user));
                    this.router.navigate(['']);
                },
                error => {
                    this.loading = false;
                });
    }
}