import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {WebshopComponent} from "./webshop.component";

const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent }
    ]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebshopRoutingModule { }

export const routedComponents = [HomeComponent, ProductsComponent, RegisterComponent, LoginComponent];
