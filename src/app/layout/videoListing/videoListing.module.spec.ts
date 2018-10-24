import { VideoListingModule } from './videoListing.module';

describe('VideoListingModule', () => {
  let videoListingModule: VideoListingModule;

  beforeEach(() => {
    videoListingModule = new VideoListingModule();
  });

  it('should create an instance', () => {
    expect(videoListingModule).toBeTruthy();
  });
});
