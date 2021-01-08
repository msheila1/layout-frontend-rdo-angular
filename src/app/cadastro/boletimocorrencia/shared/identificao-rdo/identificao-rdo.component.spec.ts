import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificaoRdoComponent } from './identificao-rdo.component';

describe('IdentificaoRdoComponent', () => {
  let component: IdentificaoRdoComponent;
  let fixture: ComponentFixture<IdentificaoRdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificaoRdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificaoRdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
