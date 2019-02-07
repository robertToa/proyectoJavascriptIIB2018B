import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroMainComponent } from './miembro-main.component';

describe('MiembroMainComponent', () => {
  let component: MiembroMainComponent;
  let fixture: ComponentFixture<MiembroMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
