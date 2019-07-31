import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PinResult } from '../../../components/auth/pin/auth-pin.component';
import { UserService } from '../../../services/api/user/user.service';


@Component({
    selector: 'app-auth-enter-pin',
    templateUrl: './auth-enter-pin.page.html',
    styleUrls: ['./auth-enter-pin.page.scss'],
})
export class AuthEnterPinPage implements OnInit {

    returnUrl: string;

    constructor(
        protected userService: UserService,
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected zone: NgZone,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.return && !params.return.startsWith('/auth/')) {
                this.returnUrl = params.return;
            }
        });
    }

    async onSubmit(event: PinResult) {

        await this.userService.initialize();

        this.userService.verifyPin(event.code).then(pinValid => {
            if (pinValid) {
                this.zone.run(() => {
                    this.router.navigateByUrl(this.returnUrl || '/', {
                        replaceUrl: true
                    });
                });
            } else {
                event.returnError('Pin onjuist!');
            }
        });

    }
}
