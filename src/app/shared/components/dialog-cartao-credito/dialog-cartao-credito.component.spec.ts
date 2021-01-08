import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCartaoCreditoComponent } from './dialog-cartao-credito.component';

describe('DialogCartaoCreditoComponent', () => {
  let component: DialogCartaoCreditoComponent;
  let fixture: ComponentFixture<DialogCartaoCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCartaoCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
