import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tasks',
        loadChildren: './pages/tasks/tasks-routing.module#TasksRoutingModule',
    },
    {
        path: 'time-left',
        loadChildren: './pages/time-left/time-left.module#TimeLeftPageModule',
    },
    {
        path: 'tabs',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
