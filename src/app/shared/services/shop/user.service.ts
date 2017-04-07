import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from "../../models/user";
import {AuthenticationService} from "../authentication/authentication.service";
import {Observable} from "rxjs";
import {ResetPassword} from "../../models/reset-password";
import {Address} from "../../models/address";

@Injectable()
export class UserService {
    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    create(user: User) : Observable<any> {
        return this.http.put('/api/v1/user/register', user).map((response: Response) => response.text());
    }

    getUserInfo() : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/v1/user/profile', options)
            .map((response: Response) => response.json());
    }

    changePassword(resetPassword: ResetPassword) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/v1/user/profile/password', resetPassword, options).map((response: Response) => response.text());
    }

    changeAddress(newAddress : Address, type: string) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`/api/v1/user/profile/${type}`, newAddress, options);
    }

    getUserOrders() : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/v1/shopping-order', options)
            .map((response: Response) => response.json());
    }

    getOrder(orderId: number) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(`/api/v1/shopping-order/${orderId}`, options)
            .map((response: Response) => response.json());
    }


}