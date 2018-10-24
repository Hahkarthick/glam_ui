import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent} from './eventListing.component';

const routes: Routes = [
    {
        path: '', component: EventListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventListingRoutingModule {
}
