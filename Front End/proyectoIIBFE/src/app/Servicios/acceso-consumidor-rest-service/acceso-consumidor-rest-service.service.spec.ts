import { TestBed } from '@angular/core/testing';

import { AccesoConsumidorRestServiceService } from './acceso-consumidor-rest-service.service';

describe('AccesoConsumidorRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesoConsumidorRestServiceService = TestBed.get(AccesoConsumidorRestServiceService);
    expect(service).toBeTruthy();
  });
});
