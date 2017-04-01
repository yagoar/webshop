import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from "./shared/services/shop/user.service";
import { routing } from "./app.routing";
import { CollapseModule } from "ng2-bootstrap";
import { WebshopModule } from "./webshop/webshop.module";
import { AuthenticationService } from "./shared/services/authentication/authentication.service";
import { AuthGuard } from "./shared/services/authentication/authguard";
import {PagerService} from "./shared/services/shop/pager.service";
import {ItemsService} from "./shared/services/shop/items.service";
import {ShoppingCartService} from "./shared/services/shop/shopping-cart.service";
import {AdminModule} from "./admin/admin.module";
import { OrderDetailsComponent } from './webshop/pages/account/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WebshopModule,
    AdminModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule,
    routing,
    CollapseModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de-DE" },
    AuthGuard,
    AuthenticationService,
    UserService,
    PagerService,
    ItemsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
