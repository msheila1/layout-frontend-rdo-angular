import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObjetoComponent } from './dialog-objeto.component';

describe('DialogObjetoComponent', () => {
  let component: DialogObjetoComponent;
  let fixture: ComponentFixture<DialogObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
