import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViaturaComponent } from './table-viatura.component';

describe('TableViaturaComponent', () => {
  let component: TableViaturaComponent;
  let fixture: ComponentFixture<TableViaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});