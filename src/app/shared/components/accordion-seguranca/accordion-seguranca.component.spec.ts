import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSegurancaComponent } from './accordion-seguranca.component';

describe('AccordionSegurancaComponent', () => {
  let component: AccordionSegurancaComponent;
  let fixture: ComponentFixture<AccordionSegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionSegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
