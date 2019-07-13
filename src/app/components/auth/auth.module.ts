import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { AuthPinComponent } from './pin/auth-pin.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [
        AuthPinComponent,
    ],
    exports: [
        AuthPinComponent,
    ],
})
export class AuthComponentsModule {
}
