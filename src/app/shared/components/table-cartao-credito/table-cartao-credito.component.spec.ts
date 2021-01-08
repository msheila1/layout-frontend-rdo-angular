import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCartaoCreditoComponent } from './table-cartao-credito.component';

describe('TableCartaoCreditoComponent', () => {
  let component: TableCartaoCreditoComponent;
  let fixture: ComponentFixture<TableCartaoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCartaoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});