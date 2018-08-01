import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarragoComponent } from './farrago.component';

describe('FarragoComponent', () => {
  let component: FarragoComponent;
  let fixture: ComponentFixture<FarragoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarragoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarragoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
