import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimateObjComponent } from './animate-obj.component';

describe('AnimateObjComponent', () => {
  let component: AnimateObjComponent;
  let fixture: ComponentFixture<AnimateObjComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
