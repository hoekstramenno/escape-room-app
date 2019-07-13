import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPinComponent } from './auth-pin.component';

describe('AuthPinComponent', () => {
    let component: AuthPinComponent;
    let fixture: ComponentFixture<AuthPinComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthPinComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthPinComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
