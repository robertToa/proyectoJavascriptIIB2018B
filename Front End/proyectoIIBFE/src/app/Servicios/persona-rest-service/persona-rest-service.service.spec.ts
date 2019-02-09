import { TestBed } from '@angular/core/testing';

import { PersonaRestServiceService } from './persona-rest-service.service';

describe('PersonaRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaRestServiceService = TestBed.get(PersonaRestServiceService);
    expect(service).toBeTruthy();
  });
});
