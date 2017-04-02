import {Component, Input} from "@angular/core";
import {Category} from "../models/shop/category";
import {ItemsService} from "../services/shop/items.service";

@Component({
    selector: 'tree-category',
    templateUrl: './tree-category.html'
})
export class TreeCategoryComponent{

    @Input() category: Category;
    expanded: boolean = false;

    constructor(private itemsService: ItemsService) { }

    toggle() {
        this.expanded = !this.expanded;
    }

    selectChildCategory(catId: number) {
        this.itemsService.selectChildCategory(catId);
    }


}