import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestimentaMainComponent } from './vestimenta-main.component';

describe('VestimentaMainComponent', () => {
  let component: VestimentaMainComponent;
  let fixture: ComponentFixture<VestimentaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestimentaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestimentaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
