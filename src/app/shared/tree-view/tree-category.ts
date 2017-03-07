import {Component, OnInit, Input} from "@angular/core";
import {Category} from "../models/shop/category";

@Component({
    selector: 'tree-category',
    templateUrl: './tree-category.html'
})
export class TreeCategoryComponent implements OnInit {
    ngOnInit(): void {

    }

    @Input() category: Category;
    expanded: boolean = false;

    toggle() {
        this.expanded = !this.expanded;
    }
}