import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListingRoutingModule } from './blogListing-routing.module';
import { BlogListingComponent } from './blogListing.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, BlogListingRoutingModule, PageHeaderModule],
    declarations: [BlogListingComponent]
})
export class BlogListingModule { }
