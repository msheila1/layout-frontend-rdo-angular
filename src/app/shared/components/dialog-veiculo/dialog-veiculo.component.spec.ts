import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVeiculoComponent } from './dialog-veiculo.component';

describe('DialogVeiculoComponent', () => {
  let component: DialogVeiculoComponent;
  let fixture: ComponentFixture<DialogVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
