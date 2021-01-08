import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoAlterarSenhaComponent } from './secao-alterar-senha.component';

describe('SecaoAlterarSenhaComponent', () => {
  let component: SecaoAlterarSenhaComponent;
  let fixture: ComponentFixture<SecaoAlterarSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoAlterarSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoAlterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
