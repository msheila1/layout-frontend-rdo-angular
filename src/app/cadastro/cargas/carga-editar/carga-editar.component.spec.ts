import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEditarComponent } from './carga-editar.component';

describe('CargaEditarComponent', () => {
  let component: CargaEditarComponent;
  let fixture: ComponentFixture<CargaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
