import { TestBed } from '@angular/core/testing';

import { CoustomerRegisterService } from './coustomer-register.service';

describe('CoustomerRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoustomerRegisterService = TestBed.get(CoustomerRegisterService);
    expect(service).toBeTruthy();
  });
});
