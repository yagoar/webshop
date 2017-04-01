import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Category} from "../models/shop/category";

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html'
})

export class TreeViewComponent {

  @Input() categories: Array<Category>;

}
