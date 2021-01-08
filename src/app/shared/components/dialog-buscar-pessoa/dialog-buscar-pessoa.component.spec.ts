import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarPessoaComponent } from './dialog-buscar-pessoa.component';

describe('DialogBuscarPessoaComponent', () => {
  let component: DialogBuscarPessoaComponent;
  let fixture: ComponentFixture<DialogBuscarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBuscarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});