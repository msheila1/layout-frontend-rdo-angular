import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionRelacionamentoComponent } from './accordion-relacionamento.component';

describe('AccordionRelacionamentoComponent', () => {
  let component: AccordionRelacionamentoComponent;
  let fixture: ComponentFixture<AccordionRelacionamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionRelacionamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionRelacionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
