import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateObjComponent } from './animate-obj.component';

describe('AnimateObjComponent', () => {
  let component: AnimateObjComponent;
  let fixture: ComponentFixture<AnimateObjComponent>;

  beforeEach(async(() => {
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
