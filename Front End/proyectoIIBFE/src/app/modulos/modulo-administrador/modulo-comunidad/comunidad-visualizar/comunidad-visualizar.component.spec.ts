import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadVisualizarComponent } from './comunidad-visualizar.component';

describe('ComunidadVisualizarComponent', () => {
  let component: ComunidadVisualizarComponent;
  let fixture: ComponentFixture<ComunidadVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
