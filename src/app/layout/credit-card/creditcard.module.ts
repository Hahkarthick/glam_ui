import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { CreditcardComponent } from './creditcard.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, CreditcardRoutingModule, PageHeaderModule, FormsModule],
    declarations: [CreditcardComponent]
})
export class CreditcardModule {}
