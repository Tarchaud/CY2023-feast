import { TestBed } from '@angular/core/testing';

import { RealTimeChatService } from './real-time-chat.service';

describe('RealTimeChatService', () => {
  let service: RealTimeChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealTimeChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
