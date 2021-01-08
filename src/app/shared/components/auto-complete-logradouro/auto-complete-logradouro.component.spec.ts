import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteLogradouroComponent } from './auto-complete-logradouro.component';

describe('AutoCompleteLogradouroComponent', () => {
  let component: AutoCompleteLogradouroComponent;
  let fixture: ComponentFixture<AutoCompleteLogradouroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteLogradouroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
