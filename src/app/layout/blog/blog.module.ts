import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, BlogRoutingModule, PageHeaderModule],
    declarations: [BlogComponent]
})
export class BlogModule {}
