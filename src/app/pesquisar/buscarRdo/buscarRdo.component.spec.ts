import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRdoComponent } from './buscarRdo.component';

describe('BuscarRdoComponent', () => {
  let component: BuscarRdoComponent;
  let fixture: ComponentFixture<BuscarRdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarRdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
