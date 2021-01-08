import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGeraisPessoasComponent } from './accordion-gerais-pessoas.component';

describe('AccordionGeraisPessoasComponent', () => {
  let component: AccordionGeraisPessoasComponent;
  let fixture: ComponentFixture<AccordionGeraisPessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGeraisPessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGeraisPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
