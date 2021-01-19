import { TestBed } from '@angular/core/testing';

import { AuthorizationsHttpServiceService } from './authorizations-http-service.service';

describe('AuthorizationsHttpServiceService', () => {
  let service: AuthorizationsHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
