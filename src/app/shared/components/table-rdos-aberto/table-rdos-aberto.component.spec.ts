import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRdosAbertoComponent } from './table-rdos-aberto.component';

describe('TableRdosAbertoComponent', () => {
  let component: TableRdosAbertoComponent;
  let fixture: ComponentFixture<TableRdosAbertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRdosAbertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRdosAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
