import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToggleButtonComponent } from './filter-toggle-button.component';

describe('FilterToggleButtonComponent', () => {
  let component: FilterToggleButtonComponent;
  let fixture: ComponentFixture<FilterToggleButtonComponent>;

  beforeEach(async(() => {
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
