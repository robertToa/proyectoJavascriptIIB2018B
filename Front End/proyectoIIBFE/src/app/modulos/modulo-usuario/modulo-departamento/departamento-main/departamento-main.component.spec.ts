import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoMainComponent } from './departamento-main.component';

describe('DepartamentoMainComponent', () => {
  let component: DepartamentoMainComponent;
  let fixture: ComponentFixture<DepartamentoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
