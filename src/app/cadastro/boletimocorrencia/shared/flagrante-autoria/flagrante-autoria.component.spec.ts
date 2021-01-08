import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagranteAutoriaComponent } from './flagrante-autoria.component';

describe('FlagranteAutoriaComponent', () => {
  let component: FlagranteAutoriaComponent;
  let fixture: ComponentFixture<FlagranteAutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagranteAutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagranteAutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
