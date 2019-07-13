import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
    selector: 'form-control-errors',
    templateUrl: './form-control-errors.component.html',
    styleUrls: ['./form-control-errors.component.scss'],
})
export class FormControlErrorsComponent implements OnInit {

    @Input()
    control: AbstractControl;

    @Input()
    protected errorMessages: any;

    protected keys: string[];

    constructor() {
    }

    ngOnInit(): void {
        this.keys = Object.keys(this.errorMessages);
    }

}
