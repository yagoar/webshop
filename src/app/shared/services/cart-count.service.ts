import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class CartCountService {

    itemCount:number;
    itemCountUpdate: EventEmitter<number> = new EventEmitter();

    constructor(private http: Http, private authenticationService: AuthenticationService) { }

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
            this.itemCountUpdate.emit(0);
        }

    }
}