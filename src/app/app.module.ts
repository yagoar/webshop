import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {UserService} from "./services/user.service";
import {routing} from "./app.routing";
import {CollapseModule} from "ng2-bootstrap";
import {WebshopModule} from "./webshop/webshop.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WebshopModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    routing,
    CollapseModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
