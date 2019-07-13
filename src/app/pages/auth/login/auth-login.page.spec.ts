import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginPage } from './auth-login.page';

describe('AuthLoginPage', () => {
    let component: AuthLoginPage;
    let fixture: ComponentFixture<AuthLoginPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthLoginPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthLoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
