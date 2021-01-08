import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRdosGeoprocessarComponent } from './table-rdos-geoprocessar.component';

describe('TableRdosGeoprocessarComponent', () => {
  let component: TableRdosGeoprocessarComponent;
  let fixture: ComponentFixture<TableRdosGeoprocessarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRdosGeoprocessarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRdosGeoprocessarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
