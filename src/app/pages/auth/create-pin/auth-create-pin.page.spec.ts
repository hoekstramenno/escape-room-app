import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCreatePinPage } from './auth-create-pin.page';

describe('AuthCreatePinPage', () => {
    let component: AuthCreatePinPage;
    let fixture: ComponentFixture<AuthCreatePinPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthCreatePinPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthCreatePinPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
