import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelloMainComponent } from './cabello-main.component';

describe('CabelloMainComponent', () => {
  let component: CabelloMainComponent;
  let fixture: ComponentFixture<CabelloMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabelloMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelloMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
