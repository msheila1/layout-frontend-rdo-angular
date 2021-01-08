import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionModusOperandiComponent } from './accordion-modus-operandi.component';

describe('AccordionModusOperandiComponent', () => {
  let component: AccordionModusOperandiComponent;
  let fixture: ComponentFixture<AccordionModusOperandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionModusOperandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionModusOperandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
