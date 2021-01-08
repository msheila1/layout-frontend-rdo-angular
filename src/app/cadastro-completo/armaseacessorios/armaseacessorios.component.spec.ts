import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaseacessoriosComponent } from './armaseacessorios.component';

describe('ArmaseacessoriosComponent', () => {
  let component: ArmaseacessoriosComponent;
  let fixture: ComponentFixture<ArmaseacessoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmaseacessoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaseacessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
