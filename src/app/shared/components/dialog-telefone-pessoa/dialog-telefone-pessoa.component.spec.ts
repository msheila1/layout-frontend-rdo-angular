import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTelefonePessoaComponent } from './dialog-telefone-pessoa.component';

describe('DialogTelefonePessoaComponent', () => {
  let component: DialogTelefonePessoaComponent;
  let fixture: ComponentFixture<DialogTelefonePessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTelefonePessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTelefonePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
