import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjetoAvatarComponent } from './form-objeto-avatar.component';

describe('FormObjetoAvatarComponent', () => {
  let component: FormObjetoAvatarComponent;
  let fixture: ComponentFixture<FormObjetoAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormObjetoAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObjetoAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
