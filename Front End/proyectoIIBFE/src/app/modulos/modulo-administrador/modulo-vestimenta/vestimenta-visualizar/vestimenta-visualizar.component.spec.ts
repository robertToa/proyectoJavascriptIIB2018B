import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimentaVisualizarComponent } from './vestimenta-visualizar.component';

describe('VestimentaVisualizarComponent', () => {
  let component: VestimentaVisualizarComponent;
  let fixture: ComponentFixture<VestimentaVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimentaVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimentaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
