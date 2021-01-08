import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoIdentificacaoRdoComponent } from './secao-identificacao-rdo.component';

describe('SecaoIdentificacaoRdoComponent', () => {
  let component: SecaoIdentificacaoRdoComponent;
  let fixture: ComponentFixture<SecaoIdentificacaoRdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoIdentificacaoRdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoIdentificacaoRdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
