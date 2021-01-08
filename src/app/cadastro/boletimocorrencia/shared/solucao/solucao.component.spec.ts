import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucaoComponent } from './solucao.component';

describe('SolucaoComponent', () => {
  let component: SolucaoComponent;
  let fixture: ComponentFixture<SolucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
