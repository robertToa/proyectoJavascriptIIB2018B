import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelloCrearComponent } from './cabello-crear.component';

describe('CabelloCrearComponent', () => {
  let component: CabelloCrearComponent;
  let fixture: ComponentFixture<CabelloCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabelloCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelloCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
