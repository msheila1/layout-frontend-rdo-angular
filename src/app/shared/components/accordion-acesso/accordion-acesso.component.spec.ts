import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAcessoComponent } from './accordion-acesso.component';

describe('AccordionAcessoComponent', () => {
  let component: AccordionAcessoComponent;
  let fixture: ComponentFixture<AccordionAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
