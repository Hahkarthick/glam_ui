import { BlogListingModule } from './blogListing.module';

describe('BlogListingModule', () => {
  let blogListingModule: BlogListingModule;

  beforeEach(() => {
    blogListingModule = new BlogListingModule();
  });

  it('should create an instance', () => {
    expect(blogListingModule).toBeTruthy();
  });
});
