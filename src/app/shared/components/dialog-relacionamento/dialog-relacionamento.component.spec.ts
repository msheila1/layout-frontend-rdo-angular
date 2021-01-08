import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRelacionamentoComponent } from './dialog-relacionamento.component';

describe('DialogRelacionamentoComponent', () => {
  let component: DialogRelacionamentoComponent;
  let fixture: ComponentFixture<DialogRelacionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRelacionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRelacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});