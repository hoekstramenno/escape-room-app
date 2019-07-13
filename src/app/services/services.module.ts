import { NgModule } from '@angular/core';

import { ApiModule } from './api/api.module';
import { StorageModule } from './storage/storage.module';
import { FormModule} from './form/form.module';

@NgModule({
    exports: [
        ApiModule,
        StorageModule,
        FormModule,
    ]
})
export class ServicesModule {
}
