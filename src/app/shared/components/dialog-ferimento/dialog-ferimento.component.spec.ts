import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFerimentoComponent } from './dialog-ferimento.component';

describe('DialogFerimentoComponent', () => {
  let component: DialogFerimentoComponent;
  let fixture: ComponentFixture<DialogFerimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFerimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFerimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});