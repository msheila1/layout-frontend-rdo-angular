import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoTrataseIntoleranciaComponent } from './secao-tratase-intolerancia.component';

describe('SecaoTrataseIntoleranciaComponent', () => {
  let component: SecaoTrataseIntoleranciaComponent;
  let fixture: ComponentFixture<SecaoTrataseIntoleranciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoTrataseIntoleranciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoTrataseIntoleranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
