import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionInstrumentoComponent } from './accordion-instrumento.component';

describe('AccordionInstrumentoComponent', () => {
  let component: AccordionInstrumentoComponent;
  let fixture: ComponentFixture<AccordionInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
