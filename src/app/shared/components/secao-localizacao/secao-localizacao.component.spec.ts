import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoLocalizacaoComponent } from './secao-localizacao.component';

describe('SecaoLocalizacaoComponent', () => {
  let component: SecaoLocalizacaoComponent;
  let fixture: ComponentFixture<SecaoLocalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoLocalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
