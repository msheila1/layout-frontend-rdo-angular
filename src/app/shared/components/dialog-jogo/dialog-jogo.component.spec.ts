import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJogoComponent } from './dialog-jogo.component';

describe('DialogJogoComponent', () => {
  let component: DialogJogoComponent;
  let fixture: ComponentFixture<DialogJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
