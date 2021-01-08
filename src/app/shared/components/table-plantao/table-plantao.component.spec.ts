import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlantaoComponent } from './table-plantao.component';

describe('TablePlantaoComponent', () => {
  let component: TablePlantaoComponent;
  let fixture: ComponentFixture<TablePlantaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlantaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
