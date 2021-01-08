import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBoRapidoComponent } from './cadastro-bo-rapido.component';

describe('CadastroBoRapidoComponent', () => {
  let component: CadastroBoRapidoComponent;
  let fixture: ComponentFixture<CadastroBoRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBoRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBoRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
