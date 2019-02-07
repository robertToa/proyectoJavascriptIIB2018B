import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimentaActualizarComponent } from './vestimenta-actualizar.component';

describe('VestimentaActualizarComponent', () => {
  let component: VestimentaActualizarComponent;
  let fixture: ComponentFixture<VestimentaActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimentaActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimentaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
