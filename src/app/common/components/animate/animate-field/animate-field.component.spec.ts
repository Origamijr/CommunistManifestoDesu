import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateFieldComponent } from './animate-field.component';

describe('AnimateFieldComponent', () => {
  let component: AnimateFieldComponent;
  let fixture: ComponentFixture<AnimateFieldComponent>;

  beforeEach(async(() => {
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
