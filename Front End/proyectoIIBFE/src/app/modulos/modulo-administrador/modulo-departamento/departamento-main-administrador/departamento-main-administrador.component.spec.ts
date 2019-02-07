import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoMainAdministradorComponent } from './departamento-main-administrador.component';

describe('DepartamentoMainAdministradorComponent', () => {
  let component: DepartamentoMainAdministradorComponent;
  let fixture: ComponentFixture<DepartamentoMainAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoMainAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoMainAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
