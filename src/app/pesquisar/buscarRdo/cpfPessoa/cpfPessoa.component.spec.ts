import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfPessoaComponent } from './cpfPessoa.component';

describe('CpfessoaComponent', () => {
  let component: CpfPessoaComponent;
  let fixture: ComponentFixture<CpfPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpfPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpfPessoaComponent);
    component = fixture.componentInstance;CpfPessoaComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
