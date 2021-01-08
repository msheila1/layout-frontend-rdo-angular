import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarArmasComponent } from './buscarArmas.component';

describe('BuscarArmasComponent', () => {
  let component: BuscarArmasComponent;
  let fixture: ComponentFixture<BuscarArmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarArmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
