import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCargaComponent } from './accordion-carga.component';

describe('AccordionCargaComponent', () => {
  let component: AccordionCargaComponent;
  let fixture: ComponentFixture<AccordionCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
