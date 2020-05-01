import { TestBed } from '@angular/core/testing';

import { SrudentRegisterationService } from './srudent-registeration.service';

describe('SrudentRegisterationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrudentRegisterationService = TestBed.get(SrudentRegisterationService);
    expect(service).toBeTruthy();
  });
});
