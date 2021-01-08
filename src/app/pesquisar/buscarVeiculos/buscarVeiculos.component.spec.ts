import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVeiculosComponent } from './buscarVeiculos.component';

describe('BuscarVeiculosComponent', () => {
  let component: BuscarVeiculosComponent;
  let fixture: ComponentFixture<BuscarVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
