import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarArmasComponent } from './dialog-buscar-armas.component';

describe('DialogBuscarArmasComponent', () => {
  let component: DialogBuscarArmasComponent;
  let fixture: ComponentFixture<DialogBuscarArmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBuscarArmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});