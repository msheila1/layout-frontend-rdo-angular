import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObservacoesComponent } from './dialog-observacoes.component';

describe('DialogObservacoesComponent', () => {
  let component: DialogObservacoesComponent;
  let fixture: ComponentFixture<DialogObservacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogObservacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogObservacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});