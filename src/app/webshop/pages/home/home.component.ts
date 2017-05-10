import { Component, OnInit } from '@angular/core';
import {CarouselConfig} from "ng2-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 10000, noPause: true}}]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
