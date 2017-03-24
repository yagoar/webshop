import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routedComponents, AdminRoutingModule} from "./admin.routing";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AdminComponent} from "./admin.component";
import {AdminLoginComponent} from "./pages/admin-login/admin-login.component";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {AdminNavigationComponent} from "./navigation/admin-nav.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [
    routedComponents,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNavigationComponent
  ]
})
export class AdminModule { }
