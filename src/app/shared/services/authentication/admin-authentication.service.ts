import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Router} from "@angular/router";
import {ShoppingCartService} from "../shop/shopping-cart.service";

export class Credentials {
    constructor(public username: string, public password: string) {}
}

@Injectable()
export class AdminAuthenticationService {

    adminToken: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentAdmin'));
        this.adminToken = currentUser && currentUser.token;
    }

    adminLogin(credentials: Credentials) {
        return this.http.post('/api/v1/authentication/admin', credentials)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.text();
                if (token) {
                    // set token property
                    this.adminToken = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentAdmin', JSON.stringify({ username: credentials.username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    adminLogout() {
        // clear token remove admin from local storage to log admin out
        this.adminToken = null;
        localStorage.removeItem('currentAdmin');
    }

}
