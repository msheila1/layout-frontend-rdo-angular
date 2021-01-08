import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsteveOutroLugarComponent } from './esteve-outro-lugar.component';

describe('EsteveOutroLugarComponent', () => {
  let component: EsteveOutroLugarComponent;
  let fixture: ComponentFixture<EsteveOutroLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsteveOutroLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsteveOutroLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
