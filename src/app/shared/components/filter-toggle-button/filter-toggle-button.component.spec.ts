import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterToggleButtonComponent } from './filter-toggle-button.component';

describe('FilterToggleButtonComponent', () => {
  let component: FilterToggleButtonComponent;
  let fixture: ComponentFixture<FilterToggleButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
