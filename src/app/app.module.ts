import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from "./shared/services/user.service";
import { routing } from "./app.routing";
import { CollapseModule, AlertModule } from "ng2-bootstrap";
import { WebshopModule } from "./webshop/webshop.module";
import { AuthenticationService } from "./shared/services/authentication.service";
import { AuthGuard } from "./shared/authguard";
import {PagerService} from "./shared/services/pager.service";

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
    { provide: LOCALE_ID, useValue: "de-DE" },
    AuthGuard,
    AuthenticationService,
    UserService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
