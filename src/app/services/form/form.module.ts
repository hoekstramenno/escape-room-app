import { NgModule } from '@angular/core';

import { FormHelperService } from './form-helper/form-helper.service';


@NgModule({
    providers: [
        FormHelperService,
    ],
})
export class FormModule {
}
