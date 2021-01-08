import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlantoesAbertosComponent } from './table-plantoes-abertos.component';

describe('TablePlantoesAbertosComponent', () => {
  let component: TablePlantoesAbertosComponent;
  let fixture: ComponentFixture<TablePlantoesAbertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlantoesAbertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlantoesAbertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
