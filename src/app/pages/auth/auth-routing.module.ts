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
        path: 'register',
        loadChildren: './register/auth-register.module#AuthRegisterPageModule'
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
