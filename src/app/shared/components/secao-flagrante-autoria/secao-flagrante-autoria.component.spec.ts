import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoFlagranteAutoriaComponent } from './secao-flagrante-autoria.component';

describe('SecaoFlagranteAutoriaComponent', () => {
  let component: SecaoFlagranteAutoriaComponent;
  let fixture: ComponentFixture<SecaoFlagranteAutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoFlagranteAutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoFlagranteAutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
