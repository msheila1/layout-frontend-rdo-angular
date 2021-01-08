import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCaracteristicaPessoaComponent } from './dialog-caracteristica-pessoa.component';

describe('DialogCaracteristicaPessoaComponent', () => {
  let component: DialogCaracteristicaPessoaComponent;
  let fixture: ComponentFixture<DialogCaracteristicaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCaracteristicaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCaracteristicaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});