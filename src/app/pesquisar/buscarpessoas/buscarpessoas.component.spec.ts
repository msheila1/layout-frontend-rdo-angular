import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpessoasComponent } from './buscarpessoas.component';

describe('BuscarpessoasComponent', () => {
  let component: BuscarpessoasComponent;
  let fixture: ComponentFixture<BuscarpessoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarpessoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
