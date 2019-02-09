import { TestBed } from '@angular/core/testing';

import { AutenticacionRestServiceService } from './autenticacion-rest-service.service';

describe('AutenticacionRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticacionRestServiceService = TestBed.get(AutenticacionRestServiceService);
    expect(service).toBeTruthy();
  });
});
