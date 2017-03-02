import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'items-grid',
  templateUrl: './item-grid.component.html'
})
export class ItemsGridComponent implements OnInit {

  public totalItems: number = 100;
  public currentPage: number = 4;
  public itemsPerPage: number = 10;
  @Input() items: Array<any> = [];

  constructor() { }

  ngOnInit() {


  }

  public getPage(): void {
  }

  public openDetailPage(id:number) {
  }

  public addToCart(id:number) {
  }

}
