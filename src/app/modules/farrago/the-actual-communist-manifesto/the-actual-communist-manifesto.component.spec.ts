import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheActualCommunistManifestoComponent } from './the-actual-communist-manifesto.component';

describe('TheActualCommunistManifestoComponent', () => {
  let component: TheActualCommunistManifestoComponent;
  let fixture: ComponentFixture<TheActualCommunistManifestoComponent>;

  beforeEach(async(() => {
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
