import { NgModule } from '@angular/core';
import {routedComponents, WebshopRoutingModule} from "./webshop.routing";
import {HeaderComponent} from "../shared/header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {NavigationComponent} from "./pages/products/products-sidebar/products-sidebar.component";
import {LoginComponent} from "./pages/account/login/login.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductGridComponent} from "./pages/products/product-grid/product-grid.component";
import {TopHeaderComponent} from "./top-header/top-header.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {WebshopComponent} from "./webshop.component";
import {FormsModule} from "@angular/forms";
import {CollapseModule} from "ng2-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {AccountComponent} from "./pages/account/account.component";

@NgModule({
  imports: [
    WebshopRoutingModule,
    FormsModule,
    BrowserModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    routedComponents,
    WebshopComponent,
    HeaderComponent,
    MenuComponent,
    NavigationComponent,
    LoginComponent,
    ProductsComponent,
    ProductGridComponent,
    TopHeaderComponent,
    ShoppingCartComponent,
    AccountComponent
  ]
})
export class WebshopModule { }
