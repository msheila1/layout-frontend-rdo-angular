import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgPessoaComponent } from './rgPessoa.component';

describe('RgPessoaComponent', () => {
  let component: RgPessoaComponent;
  let fixture: ComponentFixture<RgPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgPessoaComponent);
    component = fixture.componentInstance;RgPessoaComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
