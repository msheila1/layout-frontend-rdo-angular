import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmenudemoComponent } from './panelmenudemo.component';

describe('PanelmenudemoComponent', () => {
  let component: PanelmenudemoComponent;
  let fixture: ComponentFixture<PanelmenudemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelmenudemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelmenudemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
