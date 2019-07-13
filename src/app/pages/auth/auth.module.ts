import { NgModule } from '@angular/core';

import { PagesModule } from '../pages.module';


@NgModule({
    exports: [
        PagesModule,
    ],
})
export class AuthModule {
}
