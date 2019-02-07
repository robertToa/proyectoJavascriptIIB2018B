import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelloVisualizarComponent } from './cabello-visualizar.component';

describe('CabelloVisualizarComponent', () => {
  let component: CabelloVisualizarComponent;
  let fixture: ComponentFixture<CabelloVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabelloVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelloVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
