import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFerimentoComponent } from './accordion-ferimento.component';

describe('AccordionFerimentoComponent', () => {
  let component: AccordionFerimentoComponent;
  let fixture: ComponentFixture<AccordionFerimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionFerimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionFerimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
