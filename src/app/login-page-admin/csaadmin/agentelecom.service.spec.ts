import { TestBed } from '@angular/core/testing';

import { AgentelecomService } from './agentelecom.service';

describe('AgentelecomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentelecomService = TestBed.get(AgentelecomService);
    expect(service).toBeTruthy();
  });
});
