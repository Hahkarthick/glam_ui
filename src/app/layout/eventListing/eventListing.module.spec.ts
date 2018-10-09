import { EventListingModule } from './eventListing.module';

describe('EventListingModule', () => {
  let eventListingModule: EventListingModule;

  beforeEach(() => {
    eventListingModule = new EventListingModule();
  });

  it('should create an instance', () => {
    expect(eventListingModule).toBeTruthy();
  });
});
