import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSolucaoComponent } from './secao-solucao.component';

describe('SecaoSolucaoComponent', () => {
  let component: SecaoSolucaoComponent;
  let fixture: ComponentFixture<SecaoSolucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoSolucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
