import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostroVisualizarComponent } from './rostro-visualizar.component';

describe('RostroVisualizarComponent', () => {
  let component: RostroVisualizarComponent;
  let fixture: ComponentFixture<RostroVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostroVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostroVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
