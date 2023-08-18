import { TestBed } from '@angular/core/testing';

import { AuhorizationGuard } from './authorization.guard';

describe('AuhorizationGuard', () => {
  let guard: AuhorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuhorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
