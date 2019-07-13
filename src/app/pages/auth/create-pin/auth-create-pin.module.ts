import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../auth.module';
import { AuthCreatePinPage } from './auth-create-pin.page';
import { AuthComponentsModule } from '../../../components/auth/auth.module';
import { PagesModule } from '../../pages.module';


@NgModule({
    imports: [
        PagesModule,
        AuthModule,
        AuthComponentsModule,
        RouterModule.forChild([{path: '', component: AuthCreatePinPage}]),
    ],
    declarations: [AuthCreatePinPage]
})
export class AuthCreatePinPageModule {
}
