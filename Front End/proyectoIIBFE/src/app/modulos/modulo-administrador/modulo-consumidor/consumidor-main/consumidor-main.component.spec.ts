import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorMainComponent } from './consumidor-main.component';

describe('ConsumidorMainComponent', () => {
  let component: ConsumidorMainComponent;
  let fixture: ComponentFixture<ConsumidorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumidorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumidorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
