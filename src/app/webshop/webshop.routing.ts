import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import { ItemsComponent} from "./pages/items/items.component";
import {RegisterComponent} from "./pages/account/register/register.component";
import {LoginComponent} from "./pages/account/login/login.component";
import {WebshopComponent} from "./webshop.component";
import {AccountComponent} from "./pages/account/account.component";
import {AuthGuard} from "../shared/authguard";
import {ShoppingCartComponent} from "./pages/checkout/shopping-cart/shopping-cart.component";
import {OrderConfirmationComponent} from "./pages/checkout/order-confirmation/order-confirmation.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";

const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'category/:id', component: ItemsComponent },
        { path: 'details/:id', component: ItemDetailsComponent },
        { path: 'cart', component: ShoppingCartComponent},
        { path: 'checkout', component: OrderConfirmationComponent , canActivate: [AuthGuard]},
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
