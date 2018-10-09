import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditcardinfoComponent } from './creditcardinfo.component';

const routes: Routes = [
    {
        path: '',
        component: CreditcardinfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditcardinfoRoutingModule {}
