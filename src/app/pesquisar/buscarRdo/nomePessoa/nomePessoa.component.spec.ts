import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomePessoaComponent } from './nomePessoa.component';

describe('NomePessoaComponent', () => {
  let component: NomePessoaComponent;
  let fixture: ComponentFixture<NomePessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomePessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
