import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {ItemsAndQuantity} from "../models/shop/items-quantity";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ShoppingCartService {

    itemCount:number;
    itemCountUpdate: EventEmitter<number> = new EventEmitter();

    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    getShoppingCart() {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(`/api/v1/shopping-cart`, options).map((response: Response) => response.json());
    }

    addItemToShoppingCart(items: ItemsAndQuantity) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`/api/v1/shopping-cart`, items, options).map((response: Response) => response.text());
    }

    removeItemFromShoppingCart(itemId: number) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`/api/v1/shopping-cart/${itemId}`, options).map((response: Response) => response.text());
    }

    updateItemQuantity(itemId: number, quantity: number) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`/api/v1/shopping-cart/${itemId}`, quantity, options).map((response: Response) => response.text());
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
                        this.itemCountUpdate.emit(this.itemCount);
                    }
                );
        } else{
            localStorage.setItem("cartCount", JSON.stringify(0));
            this.itemCountUpdate.emit(0);
        }
    }

    resetItemCount() {
        localStorage.setItem("cartCount", JSON.stringify(0));
    }

}