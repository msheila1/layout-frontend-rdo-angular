import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircunscricaoComponent } from './circunscricao.component';

describe('DataHoraComponent', () => {
  let component: CircunscricaoComponent;
  let fixture: ComponentFixture<CircunscricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircunscricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircunscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
