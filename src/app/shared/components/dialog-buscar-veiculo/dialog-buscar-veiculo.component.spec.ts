import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarVeiculoComponent } from './dialog-buscar-veiculo.component';

describe('DialogBuscarVeiculoComponent', () => {
  let component: DialogBuscarVeiculoComponent;
  let fixture: ComponentFixture<DialogBuscarVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBuscarVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});