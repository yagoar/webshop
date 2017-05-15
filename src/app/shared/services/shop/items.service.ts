import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {BehaviorSubject} from "rxjs";
import {FilterOption} from "../../../webshop/pages/items/item-sidebar/model/filter-option";

@Injectable()
export class ItemsService {

    selectedChildCategory: BehaviorSubject<number> = new BehaviorSubject<number>(null);
    selectedFilters: BehaviorSubject<FilterOption[]> = new BehaviorSubject<FilterOption[]>([]);

    constructor(private http: Http) { }

    getItemsInCategory(catId: number) {
        return this.http.get(`/api/v1/items/${catId}`).map((response: Response) => response.json());
    }

    getParentCategories() {
        return this.http.get(`/api/v1/items/categories`).map((response: Response) => response.json());
    }

    getCategory(catId: number) {
        return this.http.get(`/api/v1/items/category/${catId}`).map((response: Response) => response.json());
    }

    getAllCategories() {
        return this.http.get('/api/v1/items/categories/all').map((response: Response) => response.json());
    }

    getAllItems() {
        return this.http.get('/api/v1/items/categories/allItems').map((response: Response) => response.json());
    }

    getItemDetails(itemId: number) {
        return this.http.get(`/api/v1/items/details/${itemId}`).map((response: Response) => response.json());
    }

    selectChildCategory(catId: number) {
        this.selectedChildCategory.next(catId);
    }

    setFilters(selectedFilters: FilterOption[]) {
        //Emit Event with all selected filters
        this.selectedFilters.next(selectedFilters);
    }

    getImage(itemId: number) {
        return this.http.get(`/api/v1/items/images/${itemId}`).map((response: Response) => response.text());
    }
}