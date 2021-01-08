import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlantoesAbertosComponent } from './dialog-plantoes-abertos.component';

describe('DialogPlantoesAbertosComponent', () => {
  let component: DialogPlantoesAbertosComponent;
  let fixture: ComponentFixture<DialogPlantoesAbertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlantoesAbertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlantoesAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
