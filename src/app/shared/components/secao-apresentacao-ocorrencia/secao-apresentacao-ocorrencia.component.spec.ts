import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoApresentacaoOcorrenciaComponent } from './secao-apresentacao-ocorrencia.component';

describe('SecaoApresentacaoOcorrenciaComponent', () => {
  let component: SecaoApresentacaoOcorrenciaComponent;
  let fixture: ComponentFixture<SecaoApresentacaoOcorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoApresentacaoOcorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoApresentacaoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
