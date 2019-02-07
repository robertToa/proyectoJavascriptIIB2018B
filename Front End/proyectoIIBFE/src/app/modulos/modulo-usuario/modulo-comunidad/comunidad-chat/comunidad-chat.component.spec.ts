import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadChatComponent } from './comunidad-chat.component';

describe('ComunidadChatComponent', () => {
  let component: ComunidadChatComponent;
  let fixture: ComponentFixture<ComunidadChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
