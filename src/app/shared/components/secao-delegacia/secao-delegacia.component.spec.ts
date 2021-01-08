import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoDelegaciaComponent } from './secao-delegacia.component';

describe('SecaoDelegaciaComponent', () => {
  let component: SecaoDelegaciaComponent;
  let fixture: ComponentFixture<SecaoDelegaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaoDelegaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaoDelegaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
