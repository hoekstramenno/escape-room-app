import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Components } from '@ionic/core';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class FormHelperService {

    public static validators = {
        phoneNumber: [
            Validators.pattern(/^[0-9]{10,11}$/),
            Validators.minLength(10),
            Validators.maxLength(11),
        ],
        password: [
            Validators.minLength(8),
            Validators.maxLength(128),
        ],
        postalCode: [
            Validators.pattern(/^[0-9]{4} ?[a-zA-Z]{2}$/),
        ],
        checkbox: [
            (control: AbstractControl): { [key: string]: boolean } => {
                if (!control.value) {
                    return { required: true };
                }
                return null;
            }
        ]
    };

    public static groupValidators = {
        match: [
            (group: FormGroup) => {
                let val = '';
                for (const name in group.controls) {
                    const control = group.controls[name];
                    if (!val) {
                        val = control.value;
                    }
                    if (val && val !== control.value) {
                        return { noMatch: {value: control.value} };
                    }
                }
                return null;
            }
        ],
    };



    public static validationMessages = {
        icon: {
            required: 'Select an icon',
        },
        code: {
            required: 'Fill in a code',
            maxlength: 'Code can only be 3 characters ',
            minlength: 'Code can only be 3 characters ',
        },
        teamName: {
            required: 'Choose a team name',
        },
        groupNumber: {
            required: 'Give your group number',
        },
        subCamp: {
            required: 'Give your subcamp',
        },
    };

    constructor(
        protected platform: Platform,
    ) {
    }

    async initialize() {

        if (this.platform.is('android')) {
            window.addEventListener('keyboardDidShow', this.scrollFocusedElementIntoView.bind(this));
        }

        // Force iOS to focus the next field when pressing [Go] on the keyboard
        // document.addEventListener('submit', e => {
        //     if (document.activeElement && document.activeElement.parentElement.hasAttribute('tabindex')) {
        //         const nextIndex = +document.activeElement.parentElement.getAttribute('tabindex') + 1;
        //         const nextElement: HTMLInputElement = document.querySelector(`[tabindex="${nextIndex}"]`);
        //         if (nextElement) {
        //             // const nextElementIsInvalid = nextElement.matches('.ion-invalid');
        //             nextElement.querySelector('input').focus();
        //         }
        //     }
        // });

    }

    markFormGroupDirtyAndTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsDirty();
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupDirtyAndTouched(control);
            }
        });
    }

    scrollFocusedElementIntoView() {
        if (!document.activeElement || ['INPUT', 'TEXTAREA'].indexOf(document.activeElement.tagName) === -1) {
            return;
        }
        setTimeout(() => {
            this.scrollElementIntoView(document.activeElement);
        });
    }

    scrollElementIntoViewIfNeeded(element: Element, duration = 300) {
        const rect = element.getBoundingClientRect();
        const containerHeight = document.body.clientHeight;

        const topPerc = rect.top / containerHeight;
        const bottomPerc = (rect.top + rect.height) / containerHeight;

        if (topPerc < 0.25 || bottomPerc > 0.75) {
            this.scrollElementIntoView(element, duration);
        }
    }

    scrollElementIntoView(element: Element, duration = 300) {
        const rect = element.getBoundingClientRect();
        const containerHeight = document.body.clientHeight;

        const page = document.querySelector('ion-router-outlet .ion-page:not(.ion-page-hidden)');
        const content = page.querySelector('ion-content') as Components.IonContent;

        content.getScrollElement().then(scrollElement => {
            const pos = Math.round(rect.top - ((containerHeight - rect.height) / 2));
            const scrollTop = pos + scrollElement.scrollTop;

            content.scrollToPoint(0, scrollTop, duration);
        });
    }

    scrollToFirstErrorMessage() {
        setTimeout(() => {
            const $firstErrorMessage: HTMLElement = document.querySelector('.form-errors,.error');
            if ($firstErrorMessage) {
                this.scrollElementIntoView($firstErrorMessage);
            }
        });
    }

    validateFields(fields: AbstractControl[]) {
        let isValid = true;
        fields.forEach(field => {
            if (!field.valid) {
                isValid = false;
                field.markAsDirty();
                field.markAsTouched();
            }
        });
        return isValid;
    }
}
