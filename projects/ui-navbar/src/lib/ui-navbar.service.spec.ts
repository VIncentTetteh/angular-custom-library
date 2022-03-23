import { TestBed } from '@angular/core/testing';

import { UiNavbarService } from './ui-navbar.service';

describe('UiNavbarService', () => {
  let service: UiNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
