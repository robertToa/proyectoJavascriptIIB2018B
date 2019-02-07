import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoVisualizarComponent } from './departamento-visualizar.component';

describe('DepartamentoVisualizarComponent', () => {
  let component: DepartamentoVisualizarComponent;
  let fixture: ComponentFixture<DepartamentoVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
