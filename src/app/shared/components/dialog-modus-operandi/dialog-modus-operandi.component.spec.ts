import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModusOperandiComponent } from './dialog-modus-operandi.component';

describe('DialogModusOperandiComponent', () => {
  let component: DialogModusOperandiComponent;
  let fixture: ComponentFixture<DialogModusOperandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogModusOperandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModusOperandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
