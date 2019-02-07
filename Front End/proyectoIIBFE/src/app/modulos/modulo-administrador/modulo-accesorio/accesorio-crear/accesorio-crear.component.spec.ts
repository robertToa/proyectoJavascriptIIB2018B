import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioCrearComponent } from './accesorio-crear.component';

describe('AccesorioCrearComponent', () => {
  let component: AccesorioCrearComponent;
  let fixture: ComponentFixture<AccesorioCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesorioCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesorioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
