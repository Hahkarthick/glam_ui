import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Card } from '../credit-card/card';

@Component({
    selector: 'app-creditcard',
    templateUrl: './creditcard.component.html',
    styleUrls: ['./creditcard.component.scss'],
    animations: [routerTransition()]
})
export class CreditcardComponent implements OnInit {
    // bar chart

    card = new Card();
    constructor() {}

    ngOnInit() {}
}
