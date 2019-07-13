import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
// import { AuthGuard } from '../../guards/auth.guard';
// import { PlatformLoadedGuard } from '../../guards/platform-loaded.guard';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // {
      //   path: 'about',
      //   loadChildren: '../about/about.module#AboutPageModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'account',
      //   loadChildren: '../account/account-routing.module#AccountRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'buddies',
      //   loadChildren: '../buddies/buddies-routing.module#BuddiesRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'charts',
      //   loadChildren: '../charts/charts-routing.module#ChartsRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'chats',
      //   loadChildren: '../chats/chats-routing.module#ChatsRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'events',
      //   loadChildren: '../events/events-routing.module#EventsRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      // {
      //   path: 'feedback',
      //   loadChildren: '../feedback/feedback.module#FeedbackPageModule',
      //   // canActivate: [AuthGuard],
      // },
      {
        path: 'home',
        //canActivate: [PlatformLoadedGuard],
        children: [{
          path: '',
          loadChildren: '../home/home.module#HomePageModule',
          // canActivate: [AuthGuard],
        }],
      },
      {
        path: 'time-left',
        loadChildren: '../time-left/time-left.module#TimeLeftPageModule',
      },
      {
        path: 'tasks',
        loadChildren: '../tasks/task-list/task-list.module#TaskListPageModule',
        // canActivate: [AuthGuard],
      },
      // {
      //   path: 'notifications',
      //   loadChildren: '../notifications/notifications-routing.module#NotificationsRoutingModule',
      //   // canActivate: [AuthGuard],
      // },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
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
