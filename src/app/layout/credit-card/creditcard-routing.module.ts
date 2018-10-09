import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditcardComponent } from './creditcard.component';

const routes: Routes = [
    {
        path: '',
        component: CreditcardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditcardRoutingModule {}
