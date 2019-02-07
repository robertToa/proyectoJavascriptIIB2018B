import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadVisualizarConsumidoresComponent } from './comunidad-visualizar-consumidores.component';

describe('ComunidadVisualizarConsumidoresComponent', () => {
  let component: ComunidadVisualizarConsumidoresComponent;
  let fixture: ComponentFixture<ComunidadVisualizarConsumidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadVisualizarConsumidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadVisualizarConsumidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
