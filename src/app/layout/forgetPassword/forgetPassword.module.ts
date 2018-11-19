import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forgetPassword-routing.module';
import { ForgetPasswordComponent } from './forgetPassword.component';
import { PageHeaderModule } from '../../shared';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ForgetPasswordRoutingModule, NgbModule, PageHeaderModule, FormsModule],
    declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule {}
