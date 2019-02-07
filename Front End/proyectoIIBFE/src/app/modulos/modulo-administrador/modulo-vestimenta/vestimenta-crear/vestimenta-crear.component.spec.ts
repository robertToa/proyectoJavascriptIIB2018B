import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimentaCrearComponent } from './vestimenta-crear.component';

describe('VestimentaCrearComponent', () => {
  let component: VestimentaCrearComponent;
  let fixture: ComponentFixture<VestimentaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimentaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimentaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
