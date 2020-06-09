import { TestBed } from '@angular/core/testing';

import { ChatWidgetService } from './chat-widget.service';

describe('ChatWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatWidgetService = TestBed.get(ChatWidgetService);
    expect(service).toBeTruthy();
  });
});
