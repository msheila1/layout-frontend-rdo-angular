import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPessoaJuridicaComponent } from './dialog-pessoa-juridica.component';

describe('DialogPessoaJuridicaComponent', () => {
  let component: DialogPessoaJuridicaComponent;
  let fixture: ComponentFixture<DialogPessoaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPessoaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});