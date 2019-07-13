import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/api/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PinResult } from '../../../components/auth/pin/auth-pin.component';
import { IonSlides } from '@ionic/angular';
import { StorageService } from '../../../services/storage/storage/storage.service';

@Component({
    selector: 'app-auth-create-pin',
    templateUrl: './auth-create-pin.page.html',
    styleUrls: ['./auth-create-pin.page.scss'],
})
export class AuthCreatePinPage implements OnInit {

    @ViewChild('slides')
    slides: IonSlides;

    returnUrl: string;
    step = 0;
    pin: string;

    constructor(
        public userService: UserService,
        protected storage: StorageService,
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.return) {
                this.returnUrl = params.return;
            }
        });

        this.userService.initialize();
        this.storage.initialize();
    }

    async onSubmit(event: PinResult, step: number) {

        if (step === 0) {
            this.pin = event.code;
            this.gotoStep(1);

        } else if (event.code === this.pin) {

            this.pin = event.code;
            this.userService.pin = this.pin;
            this.userService.lastActiveAt = null;

            await this.storage.initialize();
            await this.storage.setItem('pin', this.pin);
            await this.storage.removeItem('lastActiveAt');

            this.router.navigateByUrl(this.returnUrl || '/', {
                replaceUrl: true
            });

        } else {
            event.returnError('De pin komt niet overeen!');
        }

    }

    gotoStep(step) {
        this.step = step;
        this.slides.slideTo(this.step);
    }

    back(e) {
        if (this.step > 0) {
            this.gotoStep(0);
        } else {
            this.router.navigateByUrl(this.returnUrl || '/', {
                replaceUrl: true
            });
        }
        e.preventDefault();
    }

}
