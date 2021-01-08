import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPastologiaComponent } from './dialog-pastologia.component';

describe('DialogPastologiaComponent', () => {
  let component: DialogPastologiaComponent;
  let fixture: ComponentFixture<DialogPastologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPastologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPastologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
