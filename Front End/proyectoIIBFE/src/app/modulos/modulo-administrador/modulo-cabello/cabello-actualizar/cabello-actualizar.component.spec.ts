import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelloActualizarComponent } from './cabello-actualizar.component';

describe('CabelloActualizarComponent', () => {
  let component: CabelloActualizarComponent;
  let fixture: ComponentFixture<CabelloActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabelloActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelloActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
