import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVestuarioComponent } from './dialog-vestuario.component';

describe('DialogVestuarioComponent', () => {
  let component: DialogVestuarioComponent;
  let fixture: ComponentFixture<DialogVestuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVestuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVestuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
