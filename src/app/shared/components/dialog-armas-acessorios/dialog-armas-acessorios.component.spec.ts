import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArmasAcessoriosComponent } from './dialog-armas-acessorios.component';

describe('DialogArmasAcessoriosComponent', () => {
  let component: DialogArmasAcessoriosComponent;
  let fixture: ComponentFixture<DialogArmasAcessoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArmasAcessoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArmasAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});