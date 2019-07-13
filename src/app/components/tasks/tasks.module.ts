import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksListComponent } from './tasks-list/tasks-list.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: [
        TasksListComponent,
    ],
    declarations: [
        TasksListComponent,
    ],
})
export class TasksComponentsModule {
}
