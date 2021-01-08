import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlantonistaComponent } from './dialog-plantonista.component';

describe('DialogPlantonistaComponent', () => {
  let component: DialogPlantonistaComponent;
  let fixture: ComponentFixture<DialogPlantonistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlantonistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlantonistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
