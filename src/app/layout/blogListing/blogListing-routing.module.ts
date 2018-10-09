import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListingComponent} from './blogListing.component';

const routes: Routes = [
    {
        path: '', component: BlogListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogListingRoutingModule {
}
