import { TestBed } from '@angular/core/testing';

import { ConsumidorRestServiceService } from './consumidor-rest-service.service';

describe('ConsumidorRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumidorRestServiceService = TestBed.get(ConsumidorRestServiceService);
    expect(service).toBeTruthy();
  });
});
