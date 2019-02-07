import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostroActualizarComponent } from './rostro-actualizar.component';

describe('RostroActualizarComponent', () => {
  let component: RostroActualizarComponent;
  let fixture: ComponentFixture<RostroActualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostroActualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostroActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
