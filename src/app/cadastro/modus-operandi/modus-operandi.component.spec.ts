import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusOperandiComponent } from './modus-operandi.component';

describe('ModusOperandiComponent', () => {
  let component: ModusOperandiComponent;
  let fixture: ComponentFixture<ModusOperandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModusOperandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModusOperandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
