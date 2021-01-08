import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHoraComponent } from './dataHora.component';

describe('DataHoraComponent', () => {
  let component: DataHoraComponent;
  let fixture: ComponentFixture<DataHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
