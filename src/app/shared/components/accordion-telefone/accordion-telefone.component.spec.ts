import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTelefoneComponent } from './accordion-telefone.component';

describe('AccordionTelefoneComponent', () => {
  let component: AccordionTelefoneComponent;
  let fixture: ComponentFixture<AccordionTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
