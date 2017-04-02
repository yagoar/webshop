import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Item} from "../../models/shop/item";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable()
export class AdminService {
    constructor(private http: Http, private authenticationService: AuthenticationService) { }

    createItem(item: Item) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/v1/admin/item', item, options).map((response: Response) => response.json());
    }

    getAllAdmins() : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/v1/admin/users/admin', options).map((response: Response) => response.json());
    }

}