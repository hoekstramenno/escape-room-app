import { FormControl } from '@angular/forms';

export class CodeValidator {

    static isValid(control: FormControl): any {

        if (isNaN(control.value)) {
            return {
                'required': true
            };
        }

        if (control.value % 1 !== 0) {
            return {
                'required': true
            };
        }

        if (control.value.toString().length < 3) {
            return {
                'minlength': true
            };
        }

        if (control.value.toString().length > 3) {
            return {
                'maxlength': true
            };
        }

        return null;
    }

}
