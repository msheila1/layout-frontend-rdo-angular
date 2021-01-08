import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTelefoneComponent } from './dialog-telefone.component';

describe('DialogTelefoneComponent', () => {
  let component: DialogTelefoneComponent;
  let fixture: ComponentFixture<DialogTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
