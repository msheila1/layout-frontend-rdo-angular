import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLinguagemComponent } from './accordion-linguagem.component';

describe('AccordionLinguagemComponent', () => {
  let component: AccordionLinguagemComponent;
  let fixture: ComponentFixture<AccordionLinguagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionLinguagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
