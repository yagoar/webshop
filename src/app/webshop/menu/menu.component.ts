import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'webshop-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
