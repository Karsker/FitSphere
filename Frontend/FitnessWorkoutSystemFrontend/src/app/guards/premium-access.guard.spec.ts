import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { premiumAccessGuard } from './premium-access.guard';

describe('premiumAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => premiumAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
