import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoEsteveOutroLugarComponent } from './secao-esteve-outro-lugar.component';

describe('SecaoEsteveOutroLugarComponent', () => {
  let component: SecaoEsteveOutroLugarComponent;
  let fixture: ComponentFixture<SecaoEsteveOutroLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoEsteveOutroLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoEsteveOutroLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
