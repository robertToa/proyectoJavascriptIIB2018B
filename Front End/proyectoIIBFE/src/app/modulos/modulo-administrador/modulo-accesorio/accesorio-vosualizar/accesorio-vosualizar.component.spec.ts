import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioVosualizarComponent } from './accesorio-vosualizar.component';

describe('AccesorioVosualizarComponent', () => {
  let component: AccesorioVosualizarComponent;
  let fixture: ComponentFixture<AccesorioVosualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesorioVosualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesorioVosualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
