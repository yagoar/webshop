import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {AuthenticationService} from "../authentication/authentication.service";
import {BehaviorSubject} from "rxjs";
import {ShoppingCart} from "../../models/shop/shopping-cart";
import * as _ from "lodash";
import {Item} from "../../models/shop/item";
import {ItemsAndQuantity} from "../../models/shop/items-quantity";

@Injectable()
export class ShoppingCartService {

    shoppingCart: ShoppingCart = {
        items : []
    };
    shoppingCartUpdate:BehaviorSubject<ShoppingCart> = new BehaviorSubject<ShoppingCart>(this.shoppingCart);
    itemCount:number;
    itemCountUpdate: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    tempItemStore: Item = null;

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.itemCount = 0;
    }

    getShoppingCart() {
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
    }

    addItemToShoppingCart(item: Item): void {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.http.post(`/api/v1/shopping-cart/new-item`, item, options).map((response: Response) => response.text())
            .subscribe(
                data => {
                    this.getItemCount();
                }
            );
    }

    tempStoreItem(item: Item) {
        this.tempItemStore = item;
    }

    removeItemFromShoppingCart(itemId: number) {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        let options = new RequestOptions({headers: headers});

        this.http.delete(`/api/v1/shopping-cart/${itemId}`, options).map((response: Response) => response.text())
            .subscribe(
                data => {
                    this.getItemCount();
                });

    }

    updateItemQuantity(itemId: number, quantity: number) {

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


    }

    placeOrder() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`/api/v1/shopping-order`, this.shoppingCart, options).map((response: Response) => {
            if(response.ok){
                this.getItemCount();
            }

            return response.text();
        });

    }

    getItemCount() {
        if(this.authenticationService.token != null) {
            // add authorization header with jwt token
            let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
            let options = new RequestOptions({headers: headers});

            this.http.get('/api/v1/shopping-cart/count', options)
                .map((response: Response) => response.text())
                .subscribe(
                    data => {
                        this.itemCount = Number(data);
                        this.itemCountUpdate.next(this.itemCount);
                    }
                );
        }
    }

    resetItemCount() {
        this.itemCount = 0;
        this.itemCountUpdate.next(this.itemCount);
    }

}