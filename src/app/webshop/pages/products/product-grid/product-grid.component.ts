import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webshop-product-grid',
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent implements OnInit {

  public totalItems: number = 100;
  public currentPage: number = 4;
  public itemsPerPage: number = 10;

  constructor() { }

  ngOnInit() {
  }

  public getPage(): void {
    console.log(this.currentPage - 1);
  }

}
