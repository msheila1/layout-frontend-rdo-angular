import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAbordagemComponent } from './dialog-abordagem.component';

describe('DialogAbordagemComponent', () => {
  let component: DialogAbordagemComponent;
  let fixture: ComponentFixture<DialogAbordagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAbordagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAbordagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
