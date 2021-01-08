import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAcionamentoComponent } from './accordion-acionamento.component';

describe('AccordionAcionamentoComponent', () => {
  let component: AccordionAcionamentoComponent;
  let fixture: ComponentFixture<AccordionAcionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAcionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAcionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
