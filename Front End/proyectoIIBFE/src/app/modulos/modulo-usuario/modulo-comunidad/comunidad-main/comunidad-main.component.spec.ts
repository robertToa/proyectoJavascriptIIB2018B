import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadMainComponent } from './comunidad-main.component';

describe('ComunidadMainComponent', () => {
  let component: ComunidadMainComponent;
  let fixture: ComponentFixture<ComunidadMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
