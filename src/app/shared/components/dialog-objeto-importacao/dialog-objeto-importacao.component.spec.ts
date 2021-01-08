import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObjetoImportacaoComponent } from './dialog-objeto-importacao.component';

describe('DialogObjetoImportacaoComponent', () => {
  let component: DialogObjetoImportacaoComponent;
  let fixture: ComponentFixture<DialogObjetoImportacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogObjetoImportacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogObjetoImportacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
