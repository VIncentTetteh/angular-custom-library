import { TestBed } from '@angular/core/testing';

import { UiFooterService } from './ui-footer.service';

describe('UiFooterService', () => {
  let service: UiFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
