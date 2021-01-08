import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRdosApreciacaoComponent } from './table-rdos-apreciacao.component';

describe('TableRdosApreciacaoComponent', () => {
  let component: TableRdosApreciacaoComponent;
  let fixture: ComponentFixture<TableRdosApreciacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRdosApreciacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRdosApreciacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
