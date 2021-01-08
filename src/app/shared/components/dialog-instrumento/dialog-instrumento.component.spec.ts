import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstrumentoComponent } from './dialog-instrumento.component';

describe('DialogInstrumentoComponent', () => {
  let component: DialogInstrumentoComponent;
  let fixture: ComponentFixture<DialogInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
