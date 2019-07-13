import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TasksModule } from '../tasks.module';
import { TaskListPage } from './task-list.page';

@NgModule({
    imports: [
        TasksModule,
        RouterModule.forChild([{path: '', component: TaskListPage}]),
    ],
    declarations: [TaskListPage]
})
export class TaskListPageModule {
}
