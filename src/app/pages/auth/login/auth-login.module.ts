import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth.module';
import { AuthLoginPage } from './auth-login.page';


@NgModule({
    imports: [
        AuthModule,
        RouterModule.forChild([{path: '', component: AuthLoginPage}]),
    ],
    declarations: [AuthLoginPage]
})
export class AuthLoginPageModule {
}
