import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RostroMainComponent } from './rostro-main.component';

describe('RostroMainComponent', () => {
  let component: RostroMainComponent;
  let fixture: ComponentFixture<RostroMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RostroMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RostroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
