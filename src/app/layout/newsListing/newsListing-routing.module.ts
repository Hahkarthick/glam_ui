import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListingComponent} from './newsListing.component';

const routes: Routes = [
    {
        path: '', component: NewsListingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsListingRoutingModule {
}
