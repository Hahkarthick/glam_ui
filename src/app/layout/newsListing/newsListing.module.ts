import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListingRoutingModule } from './newsListing-routing.module';
import { NewsListingComponent } from './newsListing.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, NewsListingRoutingModule, PageHeaderModule],
    declarations: [NewsListingComponent]
})
export class NewsListingModule {}
