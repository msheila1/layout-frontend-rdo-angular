import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGeraisVitimaComponent } from './accordion-gerais-vitima.component';

describe('AccordionGeraisVitimaComponent', () => {
  let component: AccordionGeraisVitimaComponent;
  let fixture: ComponentFixture<AccordionGeraisVitimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGeraisVitimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGeraisVitimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
