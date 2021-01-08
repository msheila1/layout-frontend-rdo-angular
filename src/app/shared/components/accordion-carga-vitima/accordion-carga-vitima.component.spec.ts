import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCargaVitimaComponent } from './accordion-carga-vitima.component';

describe('AccordionCargaVitimaComponent', () => {
  let component: AccordionCargaVitimaComponent;
  let fixture: ComponentFixture<AccordionCargaVitimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCargaVitimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCargaVitimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
