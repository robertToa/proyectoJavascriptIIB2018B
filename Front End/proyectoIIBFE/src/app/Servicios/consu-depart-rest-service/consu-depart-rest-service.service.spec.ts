import { TestBed } from '@angular/core/testing';

import { ConsuDepartRestServiceService } from './consu-depart-rest-service.service';

describe('ConsuDepartRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsuDepartRestServiceService = TestBed.get(ConsuDepartRestServiceService);
    expect(service).toBeTruthy();
  });
});
