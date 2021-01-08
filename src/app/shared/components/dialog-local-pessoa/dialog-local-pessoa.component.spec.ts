import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalPessoaComponent } from './dialog-local-pessoa.component';

describe('DialogLocalPessoaComponent', () => {
  let component: DialogLocalPessoaComponent;
  let fixture: ComponentFixture<DialogLocalPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLocalPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLocalPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
