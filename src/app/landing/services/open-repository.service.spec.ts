import { TestBed } from '@angular/core/testing';

import { OpenRepositoryService } from './open-repository.service';

describe('OpenRepositoryService', () => {
  let service: OpenRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
