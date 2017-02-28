import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import {UserService} from "../../../../shared/services/user.service";

@Component({
    selector: 'webshop-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.loading = false;
                });
    }
}