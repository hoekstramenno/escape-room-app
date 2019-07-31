import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../../guards/auth.guard';
// import { AuthGuard } from '../../guards/auth.guard';
// import { PlatformLoadedGuard } from '../../guards/platform-loaded.guard';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'time-left',
        loadChildren: '../time-left/time-left.module#TimeLeftPageModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'tasks',
        loadChildren: '../tasks/task-list/task-list.module#TaskListPageModule',
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/tasks',
        pathMatch: 'full',
        canActivate: [AuthGuard],
      }
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
