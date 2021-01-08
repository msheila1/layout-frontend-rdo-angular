import { TestBed } from '@angular/core/testing';

import { DelegaciaService } from './delegacia.service';

describe('DelegaciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelegaciaService = TestBed.get(DelegaciaService);
    expect(service).toBeTruthy();
  });
});
