const routes: Routes = [
    { path: 'shop', component: WebshopComponent, children: [
        { path: 'category/:id', component: ItemsComponent },
        { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
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