import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import { ItemsComponent} from "./pages/items/items.component";
import {RegisterComponent} from "./pages/account/register/register.component";
import {LoginComponent} from "./pages/account/login/login.component";
import {WebshopComponent} from "./webshop.component";
import {AccountComponent} from "./pages/account/account.component";
import {AuthGuard} from "../shared/services/authentication/authguard";
import {ShoppingCartComponent} from "./pages/checkout/shopping-cart/shopping-cart.component";
import {OrderConfirmationComponent} from "./pages/checkout/order-confirmation/order-confirmation.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";
import {OrderDetailsComponent} from "./pages/account/order-details/order-details.component";
import {ChangeAddressComponent} from "./pages/account/change-address/change-address.component";
import {OrderSuccessComponent} from "./pages/checkout/order-result/order-success.component";

const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'category/:id', component: ItemsComponent },
        { path: 'category/:id/:childId', component: ItemsComponent },
        { path: 'details/:id', component: ItemDetailsComponent },
        { path: 'cart', component: ShoppingCartComponent},
        { path: 'checkout', component: OrderConfirmationComponent , canActivate: [AuthGuard]},
        { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
        { path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
        { path: 'order-success', component: OrderSuccessComponent},
        { path: 'change-address', component: ChangeAddressComponent, canActivate: [AuthGuard] },
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
