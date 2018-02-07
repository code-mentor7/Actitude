import { TestBed, inject } from '@angular/core/testing';

import { RolesGuardService } from './roles-guard.service';

describe('RolesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolesGuardService]
    });
  });

  it('should be created', inject([RolesGuardService], (service: RolesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
