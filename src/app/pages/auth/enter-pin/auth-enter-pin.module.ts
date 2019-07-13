import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth.module';
import { AuthEnterPinPage } from './auth-enter-pin.page';
import { AuthComponentsModule } from '../../../components/auth/auth.module';


@NgModule({
    imports: [
        AuthModule,
        AuthComponentsModule,
        RouterModule.forChild([{path: '', component: AuthEnterPinPage}]),
    ],
    declarations: [AuthEnterPinPage]
})
export class AuthEnterPinPageModule {
}
