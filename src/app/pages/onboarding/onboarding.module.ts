import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesModule } from '../pages.module';
import { OnboardingPage } from './onboarding.page';


@NgModule({
    imports: [
        PagesModule,
        RouterModule.forChild([{path: '', component: OnboardingPage}]),
    ],
    declarations: [OnboardingPage]
})
export class OnboardingPageModule {
}
