import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroArmaComponent } from './numeroArma.component';

describe('NumeroArmaComponent', () => {
  let component: NumeroArmaComponent;
  let fixture: ComponentFixture<NumeroArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
