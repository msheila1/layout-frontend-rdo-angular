import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroRdoComponent } from './numeroRdo.component';

describe('NumeroRdoComponent', () => {
  let component: NumeroRdoComponent;
  let fixture: ComponentFixture<NumeroRdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroRdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroRdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
