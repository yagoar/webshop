import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RegisterComponent} from "./webshop/pages/register/register.component";
import {UserService} from "./services/user.service";
import {routing} from "./app.routing";
import { HomeComponent } from './webshop/pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './webshop/menu/menu.component';
import { NavigationComponent } from './webshop/pages/products/products-sidebar/products-sidebar.component';
import { WebshopComponent } from './webshop/webshop.component';
import { LoginComponent } from './webshop/pages/login/login.component';
import {CollapseModule} from "ng2-bootstrap";
import { ProductsComponent } from './webshop/pages/products/products.component';
import { ProductGridComponent } from './webshop/pages/products/product-grid/product-grid.component';
import { TopHeaderComponent } from './webshop/top-header/top-header.component';
import { AdminComponent } from './admin/admin.component';
import { ShoppingCartComponent } from './webshop/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    NavigationComponent,
    WebshopComponent,
    LoginComponent,
    ProductsComponent,
    ProductGridComponent,
    TopHeaderComponent,
    AdminComponent,
    ShoppingCartComponent
  ],
  imports: [
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
