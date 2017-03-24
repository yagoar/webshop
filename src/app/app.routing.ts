import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'admin', redirectTo: '/admin', pathMatch: 'full' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });