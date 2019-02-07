import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroAvatarComponent } from './miembro-avatar.component';

describe('MiembroAvatarComponent', () => {
  let component: MiembroAvatarComponent;
  let fixture: ComponentFixture<MiembroAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
