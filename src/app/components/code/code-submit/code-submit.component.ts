import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PinResult } from '../../auth/pin/auth-pin.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelperService } from '../../../services/form/form-helper/form-helper.service';
import { CodeValidator } from  '../../../validators/code';
import { CodeService } from '../../../services/api/code/code.service';
import { Router } from '@angular/router';
import { Task } from '../../../models/task/task';
import { UserService } from '../../../services/api/user/user.service';
import { Icon } from '../../../models/Icon';

export interface CodeResult {
    code: string;
    icon: string;

    returnError(error: string);
}

@Component({
    selector: 'code-submit',
    templateUrl: './code-submit.component.html',
    styleUrls: ['./code-submit.component.scss'],
})
export class CodeSubmitComponent implements OnInit{

    @Input()
    task: Task;
    icons: Icon[];
    icon = '';
    code = '';
    validating = false;
    error = '';
    length = 3;
    form: FormGroup;
    validationMessages;

    constructor(
        protected fb: FormBuilder,
        protected formHelper: FormHelperService,
        protected codeService: CodeService,
        protected router: Router,
        protected UserService: UserService,
    ) {
        this.form = this.fb.group({
            'code': ['', CodeValidator.isValid],
            'icon': ['', Validators.required],
        });
    }

    ngOnInit() {
        this.icons = this.getIcons();
        this.initValidationMessages();
    }

    async getIcons() {
        return this.codeService.getIcons().then(function(apiResponse) {
            return apiResponse.data;
        });
    }

    async submitCode() {
        if (this.formHelper.validateFields([
            this.form.get('code'),
            this.form.get('icon'),
        ])) {
            if (this.form.dirty && this.form.valid) {

                let response = await this.codeService.validate({
                    'number': this.task.id,
                    'icon': this.form.value.icon,
                    'code': this.form.value.code,
                    'token': this.UserService.user.token
                });

                if (response === true) {
                    this.router.navigate(['/tabs/tasks']);
                    return;
                }

                this.error = "No valid code";
            }
        } else {
            this.formHelper.scrollToFirstErrorMessage();
        }
    }

    protected initValidationMessages() {
        this.validationMessages = {
            icon: FormHelperService.validationMessages.icon,
            code: FormHelperService.validationMessages.code,
        };
    }
}
