import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlantaoAtualComponent } from './table-plantao-atual.component';

describe('TablePlantaoAtualComponent', () => {
  let component: TablePlantaoAtualComponent;
  let fixture: ComponentFixture<TablePlantaoAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePlantaoAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlantaoAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
