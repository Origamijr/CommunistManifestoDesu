import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TheActualCommunistManifestoComponent } from './the-actual-communist-manifesto.component';

describe('TheActualCommunistManifestoComponent', () => {
  let component: TheActualCommunistManifestoComponent;
  let fixture: ComponentFixture<TheActualCommunistManifestoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TheActualCommunistManifestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheActualCommunistManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
