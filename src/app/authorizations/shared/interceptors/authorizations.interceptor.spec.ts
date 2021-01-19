import { TestBed } from '@angular/core/testing';

import { AuthorizationsHttpInterceptor } from './authorizations.interceptor';

describe('AuthorizationsInterceptor', () => {
  let service: AuthorizationsHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
