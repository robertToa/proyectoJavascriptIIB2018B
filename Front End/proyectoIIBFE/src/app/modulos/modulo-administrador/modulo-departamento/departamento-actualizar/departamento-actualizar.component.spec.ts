import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoActualizarComponent } from './departamento-actualizar.component';

describe('DepartamentoActualizarComponent', () => {
  let component: DepartamentoActualizarComponent;
  let fixture: ComponentFixture<DepartamentoActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
