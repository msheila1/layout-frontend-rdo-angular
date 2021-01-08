import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlantaoComponent } from './dialog-plantao.component';

describe('DialogPlantaoComponent', () => {
  let component: DialogPlantaoComponent;
  let fixture: ComponentFixture<DialogPlantaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlantaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
