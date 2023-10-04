import { TestBed } from '@angular/core/testing';

import { CardSelectEventEmitterService } from './card-select-event-emitter.service';

describe('CardSelectEventEmitterService', () => {
  let service: CardSelectEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSelectEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
