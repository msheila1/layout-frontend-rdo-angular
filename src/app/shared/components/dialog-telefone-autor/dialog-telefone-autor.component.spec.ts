import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTelefoneAutorComponent } from './dialog-telefone-autor.component';

describe('DialogTelefoneAutorComponent', () => {
  let component: DialogTelefoneAutorComponent;
  let fixture: ComponentFixture<DialogTelefoneAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTelefoneAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTelefoneAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
