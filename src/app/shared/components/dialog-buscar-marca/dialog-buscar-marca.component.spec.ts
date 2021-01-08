import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarMarcaComponent } from './dialog-buscar-marca.component';

describe('DialogBuscarMarcaComponent', () => {
  let component: DialogBuscarMarcaComponent;
  let fixture: ComponentFixture<DialogBuscarMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBuscarMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuscarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});