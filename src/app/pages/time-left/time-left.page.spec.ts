import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLeftPage } from './time-left.page';

describe('TimeLeftPage', () => {
  let component: TimeLeftPage;
  let fixture: ComponentFixture<TimeLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
