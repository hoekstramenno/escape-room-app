import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface PinResult {
    code: string;
    returnError(error: string);
}


@Component({
    selector: 'auth-pin',
    templateUrl: './auth-pin.component.html',
    styleUrls: ['./auth-pin.component.scss'],
})
export class AuthPinComponent {

    @Input()
    length = 4;

    @Input()
    title = 'Enter pin:';

    @Output()
    submit: EventEmitter<PinResult> = new EventEmitter();

    code = '';
    validating = false;
    error = '';

    input(input: number | 'CLEAR' | 'BACKSPACE') {

        if (this.validating) {
            return;
        }

        this.error = '';

        switch (input) {
            case 'CLEAR':
                this.code = '';
                break;
            case 'BACKSPACE':
                this.code = this.code.slice(0, -1);
                break;
            default:
                if (this.code.length === this.length) {
                    return;
                }
                this.code = this.code + input;
                if (this.code.length === this.length) {
                    this.doSubmit();
                }
        }

    }

    doSubmit() {

        this.validating = true;

        this.submit.emit({
            code: this.code,
            returnError: (error: string) => {
                this.error = error;
                this.validating = false;

                setTimeout(() => {
                    this.error = '';
                }, 5000);
            }
        });
        setTimeout(() => {
            this.code = '';
            this.validating = false;
        }, 600);
    }

    getPinCodeLengthLoop() {
        return new Array(this.length);
    }
}
