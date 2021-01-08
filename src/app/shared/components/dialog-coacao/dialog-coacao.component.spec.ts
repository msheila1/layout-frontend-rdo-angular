import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCoacaoComponent } from './dialog-coacao.component';

describe('DialogCoacaoComponent', () => {
  let component: DialogCoacaoComponent;
  let fixture: ComponentFixture<DialogCoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});