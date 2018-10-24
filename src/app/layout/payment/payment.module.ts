import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, PaymentRoutingModule, PageHeaderModule],
    declarations: [PaymentComponent]
})
export class PaymentModule {}
