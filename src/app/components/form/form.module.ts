import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormControlErrorsComponent } from './form-control-errors/form-control-errors.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FormControlErrorsComponent,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FormControlErrorsComponent,
    ],
})
export class FormComponentsModule {
}
