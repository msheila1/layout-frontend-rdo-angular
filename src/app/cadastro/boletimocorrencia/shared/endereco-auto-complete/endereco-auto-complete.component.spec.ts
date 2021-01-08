import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoAutoCompleteComponent } from './endereco-auto-complete.component';

describe('EnderecoAutoCompleteComponent', () => {
  let component: EnderecoAutoCompleteComponent;
  let fixture: ComponentFixture<EnderecoAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
