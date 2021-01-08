import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCoacaoComponent } from './accordion-coacao.component';

describe('AccordionCoacaoComponent', () => {
  let component: AccordionCoacaoComponent;
  let fixture: ComponentFixture<AccordionCoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
