import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDelegaciaComponent } from './dialog-delegacia.component';

describe('DialogDelegaciaComponent', () => {
  let component: DialogDelegaciaComponent;
  let fixture: ComponentFixture<DialogDelegaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDelegaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDelegaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
