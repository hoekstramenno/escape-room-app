import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: ':id',
        loadChildren: './task/task.module#TaskPageModule',
    },
    {
        path: 'list',
        loadChildren: './task-list/task-list.module#TaskListPageModule',
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TasksRoutingModule {
}
