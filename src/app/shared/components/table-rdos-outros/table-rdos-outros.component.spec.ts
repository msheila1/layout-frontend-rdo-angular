import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRdosOutrosComponent } from './table-rdos-outros.component';

describe('TableRdosOutrosComponent', () => {
  let component: TableRdosOutrosComponent;
  let fixture: ComponentFixture<TableRdosOutrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRdosOutrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRdosOutrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
