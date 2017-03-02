import {Component, OnInit, Input} from '@angular/core';
import { TreeCategory} from "../../../../shared/tree-view/tree-category";
import {SideBarFilter} from "./sidebar-filter";

@Component({
  selector: 'items-sidebar',
  templateUrl: './item-sidebar.component.html'
})
export class ItemsSidebarComponent implements OnInit {

  categoriesIsOpen: boolean = true;
  @Input() categories: Array<TreeCategory>;
  @Input() filters: Array<SideBarFilter>;

  ngOnInit() {
  }


}
