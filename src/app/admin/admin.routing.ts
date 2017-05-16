import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {AdminComponent} from "./admin.component";
import {AdminItemComponent} from "./pages/admin-item/admin-item.component";
import {AdminAdminsComponent} from "./pages/admin-admins/admin-admins.component";
import {AdminAuthGuard} from "../shared/services/authentication/admin-authguard";
import {AdminLoginComponent} from "./pages/admin-login/admin-login.component";
import {AdminItemsetComponent} from "./pages/admin-itemset/admin-itemset.component";
import {AdminManageComponent} from "./pages/admin-manage/admin-manage.component";
import {EditItemComponent} from "./pages/admin-manage/edit-item/edit-item.component";
import {EditItemSetComponent} from "./pages/admin-manage/edit-item-set/edit-item-set.component";

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
        {path: '', component: AdminHomeComponent, canActivate: [AdminAuthGuard]},
        {path: 'new-item', component: AdminItemComponent, canActivate: [AdminAuthGuard]},
        {path: 'new-set', component: AdminItemsetComponent, canActivate: [AdminAuthGuard]},
        {path: 'manage', component: AdminManageComponent, canActivate: [AdminAuthGuard]},
        {path: 'manage/item/:id', component: EditItemComponent},
        {path: 'manage/set/:id', component: EditItemSetComponent},
        {path: 'users', component: AdminAdminsComponent, canActivate: [AdminAuthGuard]},
        {path: 'login', component: AdminLoginComponent}
    ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}

export const routedComponents = [AdminHomeComponent, AdminItemComponent, AdminAdminsComponent,
    AdminLoginComponent, AdminItemsetComponent, AdminManageComponent];
