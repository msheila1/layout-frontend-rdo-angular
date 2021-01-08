import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAbordagemComponent } from './accordion-abordagem.component';

describe('AccordionAbordagemComponent', () => {
  let component: AccordionAbordagemComponent;
  let fixture: ComponentFixture<AccordionAbordagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAbordagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAbordagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
