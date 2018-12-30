/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhySpecialComponent } from './why-special.component';

describe('WhySpecialComponent', () => {
  let component: WhySpecialComponent;
  let fixture: ComponentFixture<WhySpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhySpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
