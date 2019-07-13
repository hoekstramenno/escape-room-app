import { NgModule } from '@angular/core';

import { PagesModule } from '../pages.module';
import { TasksComponentsModule } from '../../components/tasks/tasks.module';
import { CodeComponentsModule  } from '../../components/code/code.module';

@NgModule({
    exports: [
        TasksComponentsModule,
        PagesModule,
        CodeComponentsModule,
    ]
})
export class TasksModule {
}
