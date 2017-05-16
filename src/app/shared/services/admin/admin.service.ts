import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Item} from "../../models/shop/item";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";
import {AdminAuthenticationService} from "../authentication/admin-authentication.service";
import {User} from "../../models/user";

@Injectable()
export class AdminService {
    constructor(private http: Http, private adminAuthService: AdminAuthenticationService) { }

    createItem(item: Item) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/v1/admin/item', item, options).map((response: Response) => response.text());
    }

    createItemset(item: Item) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('/api/v1/admin/itemSet', item, options).map((response: Response) => response.text());
    }

    deleteItem(itemId) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`/api/v1/admin/item/${itemId}`, options).map((response: Response) => response.text());
    }

    getAllUsers() : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/api/v1/admin/users/admin', options).map((response: Response) => response.json());
    }

    upload(file: FormData, itemName: string) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        console.log(this.adminAuthService.adminToken);

        return this.http.post(`/api/v1/file/upload/${itemName}`, file, options).map((response: Response) => response.text());
    }

    makeAdmin(email: String) : Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.adminAuthService.adminToken });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/v1/admin/users/admin', email, options).map((response: Response) => response.json());
    }

}