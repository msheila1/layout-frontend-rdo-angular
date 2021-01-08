import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoRegisterComponent } from './veiculo-register.component';

describe('DialogVeiculoComponent', () => {
  let component: VeiculoRegisterComponent;
  let fixture: ComponentFixture<VeiculoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
