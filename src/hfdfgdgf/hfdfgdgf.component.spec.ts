/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HfdfgdgfComponent } from './hfdfgdgf.component';

describe('HfdfgdgfComponent', () => {
  let component: HfdfgdgfComponent;
  let fixture: ComponentFixture<HfdfgdgfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfdfgdgfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfdfgdgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
