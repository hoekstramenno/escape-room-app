import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.page.html',
    styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {

    constructor(
        protected router: Router,
        ) {
    }

    async continue(route: string) {
        this.router.navigateByUrl(route);
    }

}
