import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, VideoRoutingModule, PageHeaderModule],
    declarations: [VideoComponent]
})
export class VideoModule {}
