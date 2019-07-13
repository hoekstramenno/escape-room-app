import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TaskPage } from './task.page';
import { TasksModule } from '../tasks.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksModule,
    RouterModule.forChild([{path: '', component: TaskPage}]),
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
