import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListingComponent } from './videoListing.component';

describe('VideoListingComponent', () => {
  let component: VideoListingComponent;
  let fixture: ComponentFixture<VideoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
