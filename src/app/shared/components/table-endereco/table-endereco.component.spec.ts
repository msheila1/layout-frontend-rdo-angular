import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnderecoComponent } from './table-endereco.component';

describe('TableEnderecoComponent', () => {
  let component: TableEnderecoComponent;
  let fixture: ComponentFixture<TableEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});