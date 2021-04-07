import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimateFieldComponent } from './animate-field.component';

describe('AnimateFieldComponent', () => {
  let component: AnimateFieldComponent;
  let fixture: ComponentFixture<AnimateFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
