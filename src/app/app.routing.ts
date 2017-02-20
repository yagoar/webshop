import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./webshop/pages/register/register.component";
import {WebshopComponent} from "./webshop/webshop.component";
import {HomeComponent} from "./webshop/pages/home/home.component";
import {LoginComponent} from "./webshop/pages/login/login.component";
import {ProductsComponent} from "./webshop/pages/products/products.component";
import {AdminComponent} from "./admin/admin.component";

const appRoutes: Routes = [
    { path: '', component: WebshopComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'products', component: ProductsComponent }
    ]},
    { path: 'admin', component: AdminComponent,
        children: [

    ]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });