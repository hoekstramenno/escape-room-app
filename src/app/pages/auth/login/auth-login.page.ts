import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { environment } from '../../../../environments/environment';
import { DefaultPage } from '../../default.page';
import { UserService } from '../../../services/services';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.page.html',
    styleUrls: ['./auth-login.page.scss'],
})
export class AuthLoginPage extends DefaultPage implements OnInit {

    form: FormGroup;
    error: string;
    submitting = false;
    validationMessages;
    testMode = !environment.production;
    returnUrl: string;

    constructor(
        public userService: UserService,
        protected fb: FormBuilder,
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected toastCtrl: ToastController,
    ) {
        super();

        this.activatedRoute.queryParams.subscribe(params => {
            if (params.return && !params.return.startsWith('/auth/')) {
                this.returnUrl = params.return;
            }
            if (params.message) {
                this.toastCtrl.create({
                    message: params.message,
                    duration: 5000,
                }).then(t => t.present());
            }
        });
    }

    ngOnInit() {

        if (this.router.url.startsWith('/auth/logout')) {
            // setTimeout(() => {
            //     this.logout();
            // }, 100);
            return;
        }

        this.form = this.fb.group({
            email: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.email,
            ])),
            password: new FormControl(null, Validators.required),
        });

        this.initialize();
    }

    async initialize() {
        await this.userService.initialize();

        // this.form.get('email').setValue(this.userService.user.email);
    }

    async login() {

        this.error = null;

        // if (this.form.invalid) {
        //     // this.formHelper.markFormGroupDirtyAndTouched(this.form);
        //     return;
        // }
        //
        // this.submitting = true;
        //
        // try {
        //     await this.userService.login(this.form.getRawValue());
        //     this.form.controls.password.markAsPristine();
        //
        //     this.router.navigateByUrl(this.returnUrl || '/', {
        //         replaceUrl: true
        //     });
        //
        // } catch (error) {
        //     this.error = error.message;
        //     this.formHelper.scrollToFirstErrorMessage();
        //     console.warn('Login error:', error.message);
        // }

        this.submitting = false;
    }

    // private async logout() {
    //     await this.userService.logout();
    //     this.router.navigateByUrl('/auth/login', {replaceUrl: true});
    // }
}
