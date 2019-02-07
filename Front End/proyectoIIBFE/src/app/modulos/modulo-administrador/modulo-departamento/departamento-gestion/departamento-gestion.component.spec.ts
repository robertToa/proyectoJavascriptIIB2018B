import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoGestionComponent } from './departamento-gestion.component';

describe('DepartamentoGestionComponent', () => {
  let component: DepartamentoGestionComponent;
  let fixture: ComponentFixture<DepartamentoGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
