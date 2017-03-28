import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {ItemsAndQuantity} from '../models/shop/items-quantity';
import {AuthenticationService} from './authentication/authentication.service';
import {BehaviorSubject} from 'rxjs';
import {ShoppingCart} from "../models/shop/shopping-cart";
import * as _ from 'lodash';

@Injectable()
export class ShoppingCartService {

    shoppingCart:ShoppingCart;
    itemCount:number;
    itemCountUpdate: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.shoppingCart = {
            items : []
        };
        this.itemCount = 0;
    }

    getShoppingCart(): ShoppingCart {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.get(`/api/v1/shopping-cart`, options).map((response: Response) => response.json())
                .subscribe(
                    data => {
                        this.shoppingCart = data;
                    }
                );
        }

        return this.shoppingCart;
    }

    addItemToShoppingCart(items: ItemsAndQuantity): void {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.http.post(`/api/v1/shopping-cart`, items, options).map((response: Response) => response.text())
            .subscribe(
                data => {
                    this.getItemCount();
                }
            );
    }

    removeItemFromShoppingCart(itemId: number) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`/api/v1/shopping-cart/${itemId}`, options).map((response: Response) => response.text());
    }

    updateItemQuantity(itemId: number, quantity: number):void {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.post(`/api/v1/shopping-cart/${itemId}`, quantity, options).map((response: Response) => response.text());
        }

        this.shoppingCart.items.map(i => {
            console.log(i);
        });

    }

    getItemCount() {
        if(this.authenticationService.token != null){
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.get('/api/v1/shopping-cart/count', options)
                .map((response: Response) => response.text())
                .subscribe(
                    data => {
                        this.itemCount = Number(data);
                        this.itemCountUpdate.next(this.itemCount);
                    }
                );
        } else{
            this.itemCountUpdate.next(this.itemCount);
        }
    }

    resetItemCount() {
        this.itemCount = 0;
    }

}