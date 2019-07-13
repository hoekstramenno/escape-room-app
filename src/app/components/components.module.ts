import { NgModule } from '@angular/core';

import { AuthComponentsModule } from './auth/auth.module';
import { UiComponentsModule } from './ui/ui.module';
import { TasksComponentsModule } from './tasks/tasks.module';
import { CodeComponentsModule } from './code/code.module';
import { FormComponentsModule } from './form/form.module';

@NgModule({
    exports: [
        AuthComponentsModule,
        UiComponentsModule,
        TasksComponentsModule,
        CodeComponentsModule,
        FormComponentsModule,
    ],
})
export class ComponentsModule {
}
