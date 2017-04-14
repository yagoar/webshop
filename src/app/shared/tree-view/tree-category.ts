import {Component, Input, OnInit} from "@angular/core";
import {Category} from "../models/shop/category";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'tree-category',
    templateUrl: './tree-category.html'
})
export class TreeCategoryComponent implements OnInit{

    @Input() category: Category;
    expanded: boolean = false;
    rootCategoryId: number;

    constructor(private router: Router , private route: ActivatedRoute) {
        //Subscribe to id parameter in URL and get items
        this.route.params.subscribe(param => {
            this.rootCategoryId = param['id'];
        });
    }

    ngOnInit(): void {

    }

    toggle() {
        this.expanded = !this.expanded;
    }

    selectChildCategory(catId: number) {
        this.router.navigate([`/shop/category/${this.rootCategoryId}/${catId}`]);
    }


}