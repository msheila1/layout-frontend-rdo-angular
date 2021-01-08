import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAcionamentoComponent } from './dialog-acionamento.component';

describe('DialogAcionamentoComponent', () => {
  let component: DialogAcionamentoComponent;
  let fixture: ComponentFixture<DialogAcionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAcionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAcionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});