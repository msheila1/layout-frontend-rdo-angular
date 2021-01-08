import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContaBancariaComponent } from './dialog-conta-bancaria.component';

describe('DialogContaBancariaComponent', () => {
  let component: DialogContaBancariaComponent;
  let fixture: ComponentFixture<DialogContaBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContaBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});