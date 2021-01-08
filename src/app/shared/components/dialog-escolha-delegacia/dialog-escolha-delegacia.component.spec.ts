import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEscolhaDelegaciaComponent } from './dialog-escolha-delegacia.component';

describe('DialogEscolhaDelegaciaComponent', () => {
  let component: DialogEscolhaDelegaciaComponent;
  let fixture: ComponentFixture<DialogEscolhaDelegaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEscolhaDelegaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEscolhaDelegaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
