import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoOcorrenciaComponent } from './apresentacao-ocorrencia.component';

describe('ApresentacaoOcorrenciaComponent', () => {
  let component: ApresentacaoOcorrenciaComponent;
  let fixture: ComponentFixture<ApresentacaoOcorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoOcorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
