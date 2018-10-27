import { NewsListingModule } from './newsListing.module';

describe('NewsListingModule', () => {
  let newsListingModule: NewsListingModule;

  beforeEach(() => {
    newsListingModule = new NewsListingModule();
  });

  it('should create an instance', () => {
    expect(newsListingModule).toBeTruthy();
  });
});
