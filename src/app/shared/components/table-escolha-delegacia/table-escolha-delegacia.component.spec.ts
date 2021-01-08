import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEscolhaDelegaciaComponent } from './table-escolha-delegacia.component';

describe('TableEscolhaDelegaciaComponent', () => {
  let component: TableEscolhaDelegaciaComponent;
  let fixture: ComponentFixture<TableEscolhaDelegaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEscolhaDelegaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEscolhaDelegaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
