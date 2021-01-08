import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPsicologicaComponent } from './dialog-psicologica.component';

describe('DialogPsicologicaComponent', () => {
  let component: DialogPsicologicaComponent;
  let fixture: ComponentFixture<DialogPsicologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPsicologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});