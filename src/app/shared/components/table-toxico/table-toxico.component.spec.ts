import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToxicoComponent } from './table-toxico.component';

describe('TableToxicoComponent', () => {
  let component: TableToxicoComponent;
  let fixture: ComponentFixture<TableToxicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableToxicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableToxicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});