import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdornoComponent } from './dialog-adorno.component';

describe('DialogAdornoComponent', () => {
  let component: DialogAdornoComponent;
  let fixture: ComponentFixture<DialogAdornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAdornoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAdornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
