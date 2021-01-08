import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCaracteristicaFisiscaComponent } from './table-caracteristica-fisica.component';

describe('TableCaracteristicaFisiscaComponent', () => {
  let component: TableCaracteristicaFisiscaComponent;
  let fixture: ComponentFixture<TableCaracteristicaFisiscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCaracteristicaFisiscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCaracteristicaFisiscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});