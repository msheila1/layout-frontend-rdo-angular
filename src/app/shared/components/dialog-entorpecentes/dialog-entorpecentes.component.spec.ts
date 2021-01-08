import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntorpecentesComponent } from './dialog-entorpecentes.component';

describe('DialogEntorpecentesComponent', () => {
  let component: DialogEntorpecentesComponent;
  let fixture: ComponentFixture<DialogEntorpecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEntorpecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntorpecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});