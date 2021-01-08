import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPessoaComponent } from './dialog-pessoa.component';

describe('DialogPessoaComponent', () => {
  let component: DialogPessoaComponent;
  let fixture: ComponentFixture<DialogPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
