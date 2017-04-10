import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {ItemsAndQuantity} from '../../models/shop/items-quantity';
import {AuthenticationService} from '../authentication/authentication.service';
import {BehaviorSubject} from 'rxjs';
import {ShoppingCart} from "../../models/shop/shopping-cart";
import * as _ from 'lodash';
import {Item} from "../../models/shop/item";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class ShoppingCartService {

    shoppingCart: ShoppingCart = {
        items : []
    };
    shoppingCartUpdate:BehaviorSubject<ShoppingCart> = new BehaviorSubject<ShoppingCart>(this.shoppingCart);
    itemCount:number;
    itemCountUpdate: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.itemCount = 0;
    }

    getShoppingCart() {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.get(`/api/v1/shopping-cart`, options).map((response: Response) => response.json())
                .subscribe(
                    data => {
                        this.shoppingCart = data;
                        this.shoppingCart.items = _.sortBy(this.shoppingCart.items, ['iq_id']);
                        this.shoppingCartUpdate.next(this.shoppingCart);
                    },
                    error => {
                        console.log(error);
                    }
                );
        } else {
            this.shoppingCartUpdate.next(this.shoppingCart);
        }
    }

    mergeShoppingCart() {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.post(`/api/v1/shopping-cart/merge`, this.shoppingCart, options).map((response: Response) => {
                if(response.ok) {
                    this.getItemCount();
                }
            });
        }
    }

    addItemToShoppingCart(item: Item): void {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.post(`/api/v1/shopping-cart/new-item`, item, options).map((response: Response) => response.text())
                .subscribe(
                    data => {
                        this.getItemCount();
                    }
                );
        } else {

            let itemInSC = this.shoppingCart.items.filter(i => i.item.i_id === item.i_id)[0];
            if(itemInSC == null) {
                this.shoppingCart.items.push({item: item, quantity: 1});
                this.getItemCount();
            } else {
                this.shoppingCart.items.forEach(i => {
                    if(i.item.i_id == item.i_id) {
                        i.quantity++;
                    }
                })
            }
        }

    }

    removeItemFromShoppingCart(itemId: number) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`/api/v1/shopping-cart/${itemId}`, options).map((response: Response) => response.text());
    }

    updateItemQuantity(itemId: number, quantity: number) {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
            let options = new RequestOptions({ headers: headers });

            this.http.post(`/api/v1/shopping-cart/quantity/${itemId}`, quantity, options).map((response: Response) => response.text())
                .subscribe(
                    data => {
                    },
                    error => {
                    }
                );
        } else {
            this.shoppingCart.items.forEach(i => {
                if(i.item.i_id == itemId) {
                    i.quantity = quantity;
                }
            })
        }

    }

    placeOrder() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.http.put(`/api/v1/shopping-order`, this.shoppingCart, options).map((response: Response) => response.text()).subscribe(
            data => {
                this.getItemCount();
            }
        );

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
            this.itemCount = this.shoppingCart.items.length;
            this.itemCountUpdate.next(this.itemCount);
        }
    }

    resetItemCount() {
        this.itemCount = 0;
        this.itemCountUpdate.next(this.itemCount);
    }

}