import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRuidoComponent } from './dialog-ruido.component';

describe('DialogRuidoComponent', () => {
  let component: DialogRuidoComponent;
  let fixture: ComponentFixture<DialogRuidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRuidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRuidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});