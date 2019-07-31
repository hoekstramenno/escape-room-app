import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonSlides } from '@ionic/angular';
import { DefaultPage } from '../../default.page';
import { FormHelperService, UserService } from '../../../services/services';

import { UserRegistration } from '../../../models/api/user-registration';

@Component({
    selector: 'app-auth-register',
    templateUrl: './auth-register.page.html',
    styleUrls: ['./auth-register.page.scss'],
})
export class AuthRegisterPage extends DefaultPage implements OnInit {

    form: FormGroup;
    error: string;
    submitting = false;
    validationMessages;
    keyboardVisible = false;

    @ViewChild('content')
    content: IonContent;

    now = new Date();
    agree = false;

    constructor(
        public userService: UserService,
        protected fb: FormBuilder,
        protected formHelper: FormHelperService,
        protected router: Router
    ) {
        super();
    }

    ngOnInit() {
        window.addEventListener('keyboardWillShow', () => {
            this.keyboardVisible = true;
        });
        window.addEventListener('keyboardWillHide', () => {
            this.keyboardVisible = false;
        });

        this.initialize();
    }

    back() {
        this.router.navigateByUrl('/onboarding');
    }

    async initialize() {
        await this.userService.initialize();

        this.form = this.fb.group({
            teamName: new FormControl(null, Validators.required),
            groupNumber: new FormControl(null, Validators.required),
            subCamp: new FormControl(null, Validators.required),
        });

        this.initValidationMessages();
    }

    protected initValidationMessages() {
        this.validationMessages = {
            teamName: FormHelperService.validationMessages.teamName,
            groupNumber: FormHelperService.validationMessages.groupNumber,
            subCamp: FormHelperService.validationMessages.subCamp,
        };
    }

    async submit() {

        if (this.formHelper.validateFields([
            this.form.get('teamName'),
            this.form.get('groupNumber'),
            this.form.get('subCamp'),
        ])) {
            this.finalizeRegistration();
        } else {
            this.formHelper.scrollToFirstErrorMessage();
        }
    }

    protected async finalizeRegistration() {

        this.error = null;

        if (this.form.invalid) {
            this.formHelper.markFormGroupDirtyAndTouched(this.form);
            this.formHelper.scrollToFirstErrorMessage();
            return;
        }

        const registration: UserRegistration = {
            teamName: this.form.get('teamName').value,
            groupNumber: this.form.get('groupNumber').value,
            subCamp: this.form.get('subCamp').value,
            authenticationHash: btoa(String(Math.random() * 10000000))
        };

        this.submitting = true;

        try {
            await this.userService.register(registration);

            this.router.navigateByUrl('/', {
                replaceUrl: true
            });

        } catch (error) {
            this.error = error.message;
            this.formHelper.scrollToFirstErrorMessage();
            console.warn('Register error:', error.message);
        }
        this.submitting = false;
    }

}
