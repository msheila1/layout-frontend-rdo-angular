import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoRdoComponent } from './veiculoRdo.component';

describe('VeivuloRdoComponent', () => {
  let component: VeiculoRdoComponent;
  let fixture: ComponentFixture<VeiculoRdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoRdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoRdoComponent);
    component = fixture.componentInstance;VeiculoRdoComponent
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
