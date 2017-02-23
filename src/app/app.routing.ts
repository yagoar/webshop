import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./webshop/pages/register/register.component";
import {WebshopComponent} from "./webshop/webshop.component";
import {HomeComponent} from "./webshop/pages/home/home.component";
import {LoginComponent} from "./webshop/pages/login/login.component";
import {ProductsComponent} from "./webshop/pages/products/products.component";
import {AdminComponent} from "./admin/admin.component";
import {WebshopModule} from "./webshop/webshop.module";

const appRoutes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });