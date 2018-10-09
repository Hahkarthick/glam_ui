import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
    animations: [routerTransition()]
})
export class PaymentComponent implements OnInit {
    // bar chart


    constructor() {}

    ngOnInit() {}
}
