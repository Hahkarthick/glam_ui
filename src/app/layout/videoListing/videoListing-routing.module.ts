import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListingComponent} from './videoListing.component';

const routes: Routes = [
    {
        path: '', component: VideoListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideoListingRoutingModule {
}
