import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class ItemsService {
    constructor(private http: Http) { }

    getItemsInCategory(catId: number) {
        return this.http.get(`/api/v1/items/${catId}`).map((response: Response) => response.json());
    }


}