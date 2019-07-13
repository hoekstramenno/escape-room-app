import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeSubmitComponent } from './code-submit/code-submit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponentsModule } from '../form/form.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FormComponentsModule,
    ],
    exports: [
        CodeSubmitComponent,
    ],
    declarations: [
        CodeSubmitComponent,
    ],
})
export class CodeComponentsModule {
}
