import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../services/services';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        protected router: Router,
        protected userService: UserService,
    ) {
    }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        await this.userService.initialize();

        if (!this.userService.loggedIn) {
            this.router.navigate(['/onboarding'], {
                queryParams: {return: state.url},
                replaceUrl: true,
            });
            return false;

        } else {

            if (!this.userService.pin) {
                this.router.navigate(['/auth/create-pin'], {
                    queryParams: {return: state.url},
                    replaceUrl: true,
                });
                return false;
            }

            const shouldEnterPin = await this.userService.shouldEnterPin();
            if (shouldEnterPin) {
                if (!this.router.url.startsWith('/auth/enter-pin')) {
                    this.router.navigate(['/auth/enter-pin'], {
                        queryParams: {return: state.url},
                        replaceUrl: true,
                    });
                }
                return false;
            } else {
                await this.userService.resetLastActiveAt();
            }
        }

        return true;
    }


}
