import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEnterPinPage } from './auth-enter-pin.page';

describe('AuthEnterPinPage', () => {
    let component: AuthEnterPinPage;
    let fixture: ComponentFixture<AuthEnterPinPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthEnterPinPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthEnterPinPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
