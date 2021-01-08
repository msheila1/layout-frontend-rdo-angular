import { TestBed } from '@angular/core/testing';

import { PlantaoGeoprocessarService } from './plantao-geoprocessar.service';

describe('PlantaoGeoprocessarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantaoGeoprocessarService = TestBed.get(PlantaoGeoprocessarService);
    expect(service).toBeTruthy();
  });
});
