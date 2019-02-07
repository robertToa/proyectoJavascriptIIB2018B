import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesorioMainComponent } from './accesorio-main.component';

describe('AccesorioMainComponent', () => {
  let component: AccesorioMainComponent;
  let fixture: ComponentFixture<AccesorioMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesorioMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesorioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
