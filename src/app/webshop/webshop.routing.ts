import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import { ItemsComponent} from "./pages/items/items.component";
import {RegisterComponent} from "./pages/account/register/register.component";
import {LoginComponent} from "./pages/account/login/login.component";
import {WebshopComponent} from "./webshop.component";
import {AccountComponent} from "./pages/account/account.component";
import {AuthGuard} from "../shared/authguard";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";

const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'products', component: ItemsComponent },
        { path: 'cart', component: ShoppingCartComponent },
        { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebshopRoutingModule { }

export const routedComponents = [HomeComponent, ItemsComponent, RegisterComponent, LoginComponent];
