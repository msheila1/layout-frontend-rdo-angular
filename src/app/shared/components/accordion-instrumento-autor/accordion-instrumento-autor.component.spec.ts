import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionInstrumentoAutorComponent } from'./accordion-instrumento-autor.component';

describe('AccordionInstrumentoAutorComponent', () => {
  let component: AccordionInstrumentoAutorComponent;
  let fixture: ComponentFixture<AccordionInstrumentoAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionInstrumentoAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionInstrumentoAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
