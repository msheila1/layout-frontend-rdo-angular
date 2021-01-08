import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSegurancaComponent } from './dialog-seguranca.component';

describe('DialogSegurancaComponent', () => {
  let component: DialogSegurancaComponent;
  let fixture: ComponentFixture<DialogSegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});