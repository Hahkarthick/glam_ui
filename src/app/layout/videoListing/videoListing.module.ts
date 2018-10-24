import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListingRoutingModule } from './videoListing-routing.module';
import { VideoListingComponent } from './videoListing.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, VideoListingRoutingModule, PageHeaderModule],
    declarations: [VideoListingComponent]
})
export class VideoListingModule {}
