import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAcessoComponent } from './dialog-acesso.component';

describe('DialogAcessoComponent', () => {
  let component: DialogAcessoComponent;
  let fixture: ComponentFixture<DialogAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});