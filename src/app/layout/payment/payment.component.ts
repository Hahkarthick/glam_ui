import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss'],
    animations: [routerTransition()]
})
export class PaymentComponent implements OnInit, AfterViewInit {
    // bar chart

    constructor( public router: Router, private renderer: Renderer2) {
    }
    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }

    ngOnInit() {}
}
