import { TestBed } from '@angular/core/testing';

import { ComunidadRestServiceService } from './comunidad-rest-service.service';

describe('ComunidadRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunidadRestServiceService = TestBed.get(ComunidadRestServiceService);
    expect(service).toBeTruthy();
  });
});
