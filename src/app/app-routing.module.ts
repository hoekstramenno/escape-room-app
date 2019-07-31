import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'tasks',
        canActivate: [AuthGuard],
        loadChildren: './pages/tasks/tasks-routing.module#TasksRoutingModule',
    },
    {
        path: 'time-left',
        canActivate: [AuthGuard],
        loadChildren: './pages/time-left/time-left.module#TimeLeftPageModule',
    },
    {
        path: 'tabs',
        canActivate: [AuthGuard],
        loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    },
    {
        path: 'onboarding',
        loadChildren: './pages/onboarding/onboarding.module#OnboardingPageModule',
    },
    {
        path: 'auth',
        loadChildren: './pages/auth/auth-routing.module#AuthRoutingModule',
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
