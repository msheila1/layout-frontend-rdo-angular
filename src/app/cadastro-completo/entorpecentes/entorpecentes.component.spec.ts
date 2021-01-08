import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntorpecentesComponent } from './entorpecentes.component';

describe('EntorpecentesComponent', () => {
  let component: EntorpecentesComponent;
  let fixture: ComponentFixture<EntorpecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntorpecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntorpecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
