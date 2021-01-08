import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimocorrenciaComponent } from './boletimocorrencia.component';

describe('BoletimocorrenciaComponent', () => {
  let component: BoletimocorrenciaComponent;
  let fixture: ComponentFixture<BoletimocorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletimocorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletimocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
