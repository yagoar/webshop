import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../../shared/models/shop/item";

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  filteredItems: Item[];

  transform(items: Item[], filters?: Array<any>): Item[] {

    if(filters.length > 0) {

      let filterArray:Item[] = items;

      filters.forEach(f => {
        switch(f.filter) {
          case 'brand':
            filterArray = filterArray.filter(i => i.brand === f.name);
            break;
          case 'color':
            filterArray = filterArray.filter(i => i.color === f.name);
            break;
          case 'material':
            filterArray = filterArray.filter(i => i.material === f.name);
            break;
        }
      });

      this.filteredItems = filterArray;

    } else {
      this.filteredItems = items;
    }

    return this.filteredItems;
  }

}
