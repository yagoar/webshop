const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'category/:id', component: ItemsComponent },
        { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
        { path: 'checkout', component: OrderConfirmationComponent , canActivate: [AuthGuard]},
        { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebshopRoutingModule { }