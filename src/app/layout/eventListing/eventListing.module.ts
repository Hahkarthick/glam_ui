import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListingRoutingModule } from './eventListing-routing.module';
import { EventListingComponent } from './eventListing.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, EventListingRoutingModule, PageHeaderModule],
    declarations: [EventListingComponent]
})
export class EventListingModule { }
