import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoAccesoMainComponent } from './codigo-acceso-main.component';

describe('CodigoAccesoMainComponent', () => {
  let component: CodigoAccesoMainComponent;
  let fixture: ComponentFixture<CodigoAccesoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoAccesoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoAccesoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
