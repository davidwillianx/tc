import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthComponent } from './fourth.component';

describe('FourthComponent', () => {
  let component: FourthComponent;
  let fixture: ComponentFixture<FourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
