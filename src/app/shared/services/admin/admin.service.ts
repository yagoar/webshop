import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Item} from "../../models/shop/item";

@Injectable()
export class AdminService {
    constructor(private http: Http) { }

    createItem(item: Item) {
        return this.http.put(`/api/v1/admin/item`, item).map((response: Response) => response.json());
    }


}