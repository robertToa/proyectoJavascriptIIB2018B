import { TestBed } from '@angular/core/testing';

import { ObjetoAvatarServiceService } from './objeto-avatar-service.service';

describe('ObjetoAvatarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetoAvatarServiceService = TestBed.get(ObjetoAvatarServiceService);
    expect(service).toBeTruthy();
  });
});
