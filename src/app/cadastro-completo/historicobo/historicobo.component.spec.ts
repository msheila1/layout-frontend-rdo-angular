import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoboComponent } from './historicobo.component';

describe('HistoricoboComponent', () => {
  let component: HistoricoboComponent;
  let fixture: ComponentFixture<HistoricoboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
