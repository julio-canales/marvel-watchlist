import { TestBed } from '@angular/core/testing';

import { InfoSelectionService } from './info-selection.service';

describe('InfoSelectionService', () => {
  let service: InfoSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
