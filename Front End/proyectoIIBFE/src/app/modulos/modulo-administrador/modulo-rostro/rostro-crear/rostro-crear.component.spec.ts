import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostroCrearComponent } from './rostro-crear.component';

describe('RostroCrearComponent', () => {
  let component: RostroCrearComponent;
  let fixture: ComponentFixture<RostroCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostroCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostroCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
