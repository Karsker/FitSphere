import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { trainerAccessGuard } from './trainer-access.guard';

describe('trainerAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => trainerAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
