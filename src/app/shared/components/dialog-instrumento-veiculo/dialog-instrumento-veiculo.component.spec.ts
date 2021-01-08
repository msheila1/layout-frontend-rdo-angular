import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInstrumentoVeiculoComponent } from './dialog-instrumento-veiculo.component';

describe('DialogInstrumentoVeiculoComponent', () => {
  let component: DialogInstrumentoVeiculoComponent;
  let fixture: ComponentFixture<DialogInstrumentoVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInstrumentoVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInstrumentoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
