import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AdminHomeComponent} from "./pages/admin-home/admin-home.component";
import {AdminComponent} from "./admin.component";
import {AdminItemComponent} from "./pages/admin-item/admin-item.component";
import {AdminAdminsComponent} from "./pages/admin-admins/admin-admins.component";

const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: '', component: AdminHomeComponent },
        { path: 'new-item', component: AdminItemComponent },
        { path: 'users', component: AdminAdminsComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [AdminHomeComponent, AdminItemComponent, AdminAdminsComponent];
