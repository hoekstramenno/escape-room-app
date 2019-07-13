import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'create-pin',
        loadChildren: './create-pin/auth-create-pin.module#AuthCreatePinPageModule',
    },
    {
        path: 'enter-pin',
        loadChildren: './enter-pin/auth-enter-pin.module#AuthEnterPinPageModule',
    },
    {
        path: 'login',
        loadChildren: './login/auth-login.module#AuthLoginPageModule',
    },
    {
        path: 'logout',
        loadChildren: './login/auth-login.module#AuthLoginPageModule',
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
