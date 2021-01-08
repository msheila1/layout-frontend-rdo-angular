import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContaBanariaComponent } from './table-conta-bancaria.component';

describe('TableContaBanariaComponent', () => {
  let component: TableContaBanariaComponent;
  let fixture: ComponentFixture<TableContaBanariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableContaBanariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContaBanariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});