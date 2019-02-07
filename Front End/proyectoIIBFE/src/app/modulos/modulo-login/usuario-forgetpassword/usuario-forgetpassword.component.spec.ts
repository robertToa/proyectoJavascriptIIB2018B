import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioForgetpasswordComponent } from './usuario-forgetpassword.component';

describe('UsuarioForgetpasswordComponent', () => {
  let component: UsuarioForgetpasswordComponent;
  let fixture: ComponentFixture<UsuarioForgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioForgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
