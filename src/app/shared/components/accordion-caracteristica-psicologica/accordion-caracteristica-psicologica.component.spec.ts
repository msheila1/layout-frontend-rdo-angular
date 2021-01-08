import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCaracteristicaPsicologiaComponent } from './accordion-caracteristica-psicologica.component';

describe('AccordionCaracteristicaPsicologiaComponent', () => {
  let component: AccordionCaracteristicaPsicologiaComponent;
  let fixture: ComponentFixture<AccordionCaracteristicaPsicologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCaracteristicaPsicologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCaracteristicaPsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
