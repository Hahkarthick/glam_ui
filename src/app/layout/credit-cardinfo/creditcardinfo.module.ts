import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CreditcardinfoRoutingModule } from './creditcardinfo-routing.module';
import { CreditcardinfoComponent } from './creditcardinfo.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, CreditcardinfoRoutingModule, PageHeaderModule, FormsModule],
    declarations: [CreditcardinfoComponent]
})
export class CreditcardinfoModule {}
