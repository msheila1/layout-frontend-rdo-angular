import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLocalPessoaComponent } from './table-local-pessoa.component';

describe('TableLocalPessoaComponent', () => {
  let component: TableLocalPessoaComponent;
  let fixture: ComponentFixture<TableLocalPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLocalPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLocalPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});