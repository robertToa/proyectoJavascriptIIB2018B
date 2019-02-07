import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioActualizarComponent } from './accesorio-actualizar.component';

describe('AccesorioActualizarComponent', () => {
  let component: AccesorioActualizarComponent;
  let fixture: ComponentFixture<AccesorioActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesorioActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesorioActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
