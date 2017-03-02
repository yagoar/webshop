import {Component, Input} from '@angular/core';
import {TreeCategory} from "./tree-category";

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html'
})

export class TreeViewComponent {
  @Input() categories: Array<TreeCategory>;
}
