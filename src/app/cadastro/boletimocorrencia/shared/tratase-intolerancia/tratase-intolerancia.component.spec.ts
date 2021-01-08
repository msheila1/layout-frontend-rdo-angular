import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrataseIntoleranciaComponent } from './tratase-intolerancia.component';

describe('TrataseIntoleranciaComponent', () => {
  let component: TrataseIntoleranciaComponent;
  let fixture: ComponentFixture<TrataseIntoleranciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrataseIntoleranciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrataseIntoleranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
