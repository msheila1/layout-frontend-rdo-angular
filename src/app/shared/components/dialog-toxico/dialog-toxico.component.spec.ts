import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogToxicoComponent } from './dialog-toxico.component';

describe('DialogToxicoComponent', () => {
  let component: DialogToxicoComponent;
  let fixture: ComponentFixture<DialogToxicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogToxicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogToxicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
