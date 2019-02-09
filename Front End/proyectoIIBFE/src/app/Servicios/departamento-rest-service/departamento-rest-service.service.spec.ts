import { TestBed } from '@angular/core/testing';

import { DepartamentoRestServiceService } from './departamento-rest-service.service';

describe('DepartamentoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartamentoRestServiceService = TestBed.get(DepartamentoRestServiceService);
    expect(service).toBeTruthy();
  });
});
