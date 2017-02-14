import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";


const appRoutes: Routes = [
    { path: '', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);