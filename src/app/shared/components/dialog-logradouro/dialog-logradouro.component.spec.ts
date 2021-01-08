import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogradouroComponent } from './dialog-logradouro.component';

describe('DialogLogradouroComponent', () => {
  let component: DialogLogradouroComponent;
  let fixture: ComponentFixture<DialogLogradouroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLogradouroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
