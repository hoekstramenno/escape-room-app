import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth.module';
import { AuthRegisterPage } from './auth-register.page';

@NgModule({
    imports: [
        AuthModule,
        RouterModule.forChild([{path: '', component: AuthRegisterPage}]),
    ],
    declarations: [AuthRegisterPage]
})
export class AuthRegisterPageModule {
}
